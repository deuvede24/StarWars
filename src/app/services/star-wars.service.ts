

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//canviimport { Observable } from 'rxjs';
import { Starship, StarshipApiResponse } from '../interfaces/starship';
import { expand, reduce, EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/starships';
  private errorImageUrl = 'path/to/backup/image.jpg';
  httpClient = inject(HttpClient);

   getStarships(page: number = 1): Observable<StarshipApiResponse> {
     return this.httpClient.get<StarshipApiResponse>(`${this.apiUrl}/?page=${page}`);
   }
     
 
  /*ANTES /*getStarshipImageUrl(url: string): string {
     // Implementa la lógica para obtener la URL de la imagen
     return 'https://via.placeholder.com/600x400'; // Sustituye esto por la lógica real
   }
 
  /*ANTES TB /*getStarshipImageUrl(url: string): string {
     // Lógica para obtener la URL de la imagen basada en la URL del starship
     const id = url.split('/').filter(segment => segment).pop();
     return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
   }
 
 
  /*MEDIO FUNCIONA /*getStarshipImageUrl(url: string): string {
     // Reemplaza esta lógica con la URL correcta para obtener la imagen
     const id = url.split('/').slice(-2, -1)[0];
     return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
   }*/

  /*getStarships(): Observable<Starship[]> {
    return this.httpClient.get<StarshipApiResponse>(this.apiUrl)
      .pipe(
        expand(data => data.next ? this.httpClient.get<StarshipApiResponse>(data.next) : EMPTY),
        reduce((acc: Starship[], data: StarshipApiResponse) => acc.concat(data.results), [])
      );
  }*/

  getStarshipDetails(id: string): Observable<Starship> {
    //return this.httpClient.get<Starship>(`${this.apiUrl}starships/${id}`);
    return this.httpClient.get<Starship>(`${this.apiUrl}/${id}`);
  }

 /* getStarshipImageUrl(url: string): string {
    //const id = url.split('/').filter(segment => segment).pop();
    const id = url.split('/').slice(-2, -1)[0];
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  }
 /* getErrorImageUrl(): string {
    return this.errorImageUrl;
  }*/
    getStarshipImageUrl(url: string): string {
      const id = url.split('/').filter(segment => segment).pop();
      return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`; // Lógica para generar la URL de la imagen
    }
}


