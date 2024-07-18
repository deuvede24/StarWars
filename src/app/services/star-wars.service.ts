

/*import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starship, StarshipApiResponse } from '../interfaces/starship';
import { Observable, EMPTY } from 'rxjs';
import { expand, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/starships';
  httpClient = inject(HttpClient);

  getStarships(page: number = 1): Observable<StarshipApiResponse> {
    return this.httpClient.get<StarshipApiResponse>(`${this.apiUrl}/?page=${page}`);
  }

  getAllStarships(): Observable<Starship[]> {
    return this.getStarships().pipe(
      expand(response => response.next ? this.httpClient.get<StarshipApiResponse>(response.next) : EMPTY),
      reduce((acc, response) => acc.concat(response.results), [] as Starship[])
    );
  }

  getStarshipDetails(id: string): Observable<Starship> {
    return this.httpClient.get<Starship>(`${this.apiUrl}/${id}`);
  }

  getStarshipImageUrl(url: string): string {
    const id = url.split('/').filter(segment => segment).pop();
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }
}*/


import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Starship, StarshipApiResponse } from '../interfaces/starship';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/starships';
  httpClient = inject(HttpClient);

  getStarships(page: number = 1): Observable<StarshipApiResponse> {
    return this.httpClient.get<StarshipApiResponse>(`${this.apiUrl}/?page=${page}`);
  }

  getStarshipDetails(id: string): Observable<Starship> {
    return this.httpClient.get<Starship>(`${this.apiUrl}/${id}`);
  }

  getStarshipImageUrl(url: string): string {
    const id = url.split('/').filter(segment => segment).pop();
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }
}
