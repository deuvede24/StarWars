import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Starship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/starships';

  constructor(private http: HttpClient) {}

  getStarships(page: number = 1): Observable<{ results: Starship[] }> {
    return this.http.get<{ results: Starship[] }>(`${this.apiUrl}/?page=${page}`);
  }
}



