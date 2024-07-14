/*import { StarshipApiResponse } from './../interfaces/starship';
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
}*/


/*import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Starship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://swapi.dev/api/starships';

  getStarships(page: number = 1): Observable<Starship[]> {
    return this.httpClient.get<{ results: Starship[] }>(`${this.apiUrl}/?page=${page}`)
      .pipe(map(response => response.results));
  }
}*/

/*cambio en el service con starShipResponse
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Starship } from '../interfaces/starship';

interface StarshipApiResponse {
  results: Starship[];
}

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://swapi.dev/api/starships';

  getStarships(page: number = 1): Observable<Starship[]> {
    return this.httpClient.get<StarshipApiResponse>(`${this.apiUrl}/?page=${page}`)
      .pipe(map(response => response.results));
  }
}*/

/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Starship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/starships';

  constructor(private httpClient: HttpClient) {}

  getStarships(page: number = 1): Observable<Starship[]> {
    return this.httpClient.get<{ results: Starship[] }>(`${this.apiUrl}/?page=${page}`)
      .pipe(map(response => response.results));
  }
}*/
/*import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Starship, StarshipApiResponse } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://swapi.dev/api/starships';

  getStarships(page: number = 1): Observable<Starship[]> {
    return this.httpClient.get<StarshipApiResponse>(`${this.apiUrl}/?page=${page}`)
      .pipe(map(response => response.results));
  }
}*/

/*import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Starship, StarshipApiResponse } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private httpClient = inject(HttpClient);
  private apiUrl = 'https://swapi.dev/api/starships';

  getStarshipsList(page: number = 1): Observable<StarshipApiResponse> {
    return this.httpClient.get<StarshipApiResponse>(`${this.apiUrl}/?page=${page}`);
  }
}*/



/*

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Starship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/starships';

  private httpClient = inject(HttpClient);


  getStarships(page: number = 1): Observable<{ results: Starship[] }> {
    return this.httpClient.get<{ results: Starship[] }>(`${this.apiUrl}/?page=${page}`);
  }
}*/

//new
/*import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { expand, reduce, map } from 'rxjs/operators';
import { Starship, StarshipApiResponse } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/starships';
  private httpClient = inject(HttpClient);

  getStarships(page: number = 1): Observable<StarshipApiResponse> {
    return this.httpClient.get<StarshipApiResponse>(`${this.apiUrl}/?page=${page}`).pipe(
      expand((data: StarshipApiResponse) => data.next ? this.httpClient.get<StarshipApiResponse>(data.next) : EMPTY),
      reduce((acc: Starship[], data: StarshipApiResponse) => acc.concat(data.results), []),
      map((results: Starship[]) => ({
        count: results.length,
        next: null,
        previous: null,
        results: results
      }))
    );
  }

  getStarshipDetails(id: string): Observable<Starship> {
    return this.httpClient.get<Starship>(`${this.apiUrl}/${id}`);
  }
}*/

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
     
 
  /* getStarshipDetails(id: string): Observable<Starship> {
     return this.httpClient.get<Starship>(`${this.apiUrl}/${id}`);
   }*/
  /*ANTES /*getStarshipImageUrl(url: string): string {
     // Implementa la lógica para obtener la URL de la imagen
     return 'https://via.placeholder.com/600x400'; // Sustituye esto por la lógica real
   }
 
  /*ANTES TB /*getStarshipImageUrl(url: string): string {
     // Lógica para obtener la URL de la imagen basada en la URL del starship
     const id = url.split('/').filter(segment => segment).pop();
     return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
   }
 
   getStarshipImageUrl(starship: Starship): string {
     const imageMap: { [key: string]: string } = {
       '2': 'https://starwars-visualguide.com/assets/img/starships/2.jpg',  // CR90 corvette
       '3': 'https://starwars-visualguide.com/assets/img/starships/3.jpg',  // Star Destroyer
       '5': 'https://starwars-visualguide.com/assets/img/starships/5.jpg',  // Sentinel-class landing craft
       '9': 'https://starwars-visualguide.com/assets/img/starships/9.jpg',  // Death Star
       '10': 'https://starwars-visualguide.com/assets/img/starships/10.jpg', // Millennium Falcon
       '11': 'https://starwars-visualguide.com/assets/img/starships/11.jpg', // Y-wing
       '12': 'https://starwars-visualguide.com/assets/img/starships/12.jpg', // X-wing
       '13': 'https://starwars-visualguide.com/assets/img/starships/13.jpg', // TIE Advanced x1
       '15': 'https://starwars-visualguide.com/assets/img/starships/15.jpg', // Executor
       '17': 'https://starwars-visualguide.com/assets/img/starships/17.jpg', // Rebel transport
     };
 
  
     const id = starship.url.split('/').slice(-2, -1)[0];
     return imageMap[id] || 'https://via.placeholder.com/600x400'; // Default image if not found
 }
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


