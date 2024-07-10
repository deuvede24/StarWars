/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsService } from '../../services/star-wars.service';
import { Starship } from '../../interfaces/starship';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class StarshipsListComponent implements OnInit {
  starships: Starship[] = [];

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(page: number = 1): void {
    this.starWarsService.getStarships(page).subscribe((response) => {
      this.starships = response.results;
    });
  }
}*/

/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsService } from '../../services/star-wars.service';
import { Starship } from '../../interfaces/starship';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StarshipsListComponent implements OnInit {
  starships$: Observable<Starship[]> = of([]);
  starships: Starship[] = [];

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(page: number = 1): void {
    this.starships$ = this.starWarsService.getStarships(page).pipe(
      map(response => response.results)
    );
    this.starships$.subscribe((starships) => {
      this.starships = starships;
    });
  }
}*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsService } from '../../services/star-wars.service';
import { Starship } from '../../interfaces/starship';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class StarshipsListComponent implements OnInit {
  starships$: Observable<Starship[]> = of([]);
  starships: Starship[] = [];

  constructor(private starWarsService: StarWarsService) {}

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(page: number = 1): void {
    this.starships$ = this.starWarsService.getStarships(page).pipe(
      map(response => response.results)
    );
    this.starships$.subscribe((starships) => {
      this.starships = starships;
    });
  }

  trackByFn(index: number, item: Starship): string {
    return item.name; // Aquí puedes usar un identificador único si está disponible
  }
}
//
