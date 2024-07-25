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
