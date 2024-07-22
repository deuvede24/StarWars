//new 
/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarWarsService } from '../../services/star-wars.service';
import { Starship, StarshipApiResponse } from '../../interfaces/starship';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe]
})
export class StarshipsListComponent implements OnInit {
  starships$!: Observable<Starship[]>;
 //starshipArray: Starship[] = [];

  constructor(private starWarsService: StarWarsService) { }

  /*ngOnInit(): void {
    this.starships$ = this.starWarsService.getStarships().pipe(
     // map((response: StarshipApiResponse) => response.results)
    );
  }

    ngOnInit(): void {
    this.starships$ = this.starWarsService.getStarships().pipe(
      map((response) => response.results));}

 /* trackByFn(index: number, item: Starship): string {
    return item.name; // Aquí puedes usar un identificador único si está disponible
  }
}*/

import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarWarsService } from '../../services/star-wars.service';
import { Starship } from '../../interfaces/starship';
import { Observable, of, concat } from 'rxjs';
import { catchError, map, switchMap, scan, tap } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, AsyncPipe]
})
export class StarshipsListComponent implements OnInit {
  starships$!: Observable<Starship[]>;
  private currentPage = 1;
  private loading = false;
  hasMorePages = true;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(): void {
    if (this.loading || !this.hasMorePages) return;

    this.loading = true;

    const starshipsPage$ = this.starWarsService.getStarships(this.currentPage).pipe(
      map(response => {
        this.hasMorePages = !!response.next;
        this.currentPage++;
        return response.results;
      }),
      catchError(() => {
        this.hasMorePages = false;
        return of([]);
      }),
      //tap(() => this.loading = false)
      tap(() => {
        this.loading = false;
        setTimeout(() => {}, 700); // Añade un retraso de 500ms entre las llamadas
      })
    );

    this.starships$ = this.starships$
      ? concat(this.starships$, starshipsPage$)
      : starshipsPage$;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    //if (window.innerWidth > 768 && (window.innerHeight + window.scrollY) >= document.body.offsetHeight)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight)  {
      this.loadMore();
    }
  }
}
//if( (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500) (other option)
//if (window.innerWidth > 768 && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100)
//if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && this.hasMorePages)
//if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) 




