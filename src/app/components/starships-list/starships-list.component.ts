import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarWarsService } from '../../services/star-wars.service';
import { Starship } from '../../interfaces/starship';
import { Observable, BehaviorSubject, of, concat } from 'rxjs';
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
  starships$ = new BehaviorSubject<Starship[]>([]);
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

    this.starWarsService.getStarships(this.currentPage).pipe(
      map(response => {
        this.hasMorePages = !!response.next;
        this.currentPage++;
        return response.results;
      }),
      catchError(() => {
        this.hasMorePages = false;
        return of([]);
      }),
      tap(() => this.loading = false)
    ).subscribe({
      next: (newStarships) => {
        const currentStarships = this.starships$.getValue();
        this.starships$.next([...currentStarships, ...newStarships]);
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 700) {
      setTimeout(() => this.loadMore(), 500);
    }
  }
}




