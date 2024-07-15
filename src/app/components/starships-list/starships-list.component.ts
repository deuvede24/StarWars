//new 
import { Component, OnInit } from '@angular/core';
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
  }*/

    ngOnInit(): void {
    this.starships$ = this.starWarsService.getStarships().pipe(
      map((response) => response.results));}

 /* trackByFn(index: number, item: Starship): string {
    return item.name; // Aquí puedes usar un identificador único si está disponible
  }*/
}


