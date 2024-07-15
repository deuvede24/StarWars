
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StarWarsService } from '../../services/star-wars.service';
import { Starship } from '../../interfaces/starship';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-starship-details',
  standalone: true,
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.scss'],
  imports: [CommonModule, RouterModule, AsyncPipe]
})
export class StarshipDetailsComponent implements OnInit {
  starship$!: Observable<Starship>;
  //imageUrl: string = '';
  loading: boolean = true;
  //errorImageUrl: string = 'path/to/backup/image.jpg';
    errorImageUrl: string = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';

  constructor(
    private route: ActivatedRoute,
    private starWarsService: StarWarsService
  ) { }

  /*ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.starship$ = this.starWarsService.getStarshipDetails(id);
    this.starship$.subscribe(starship => {
      this.loading = false;
      this.imageUrl = this.getImageUrl(starship.url);
       this.imageUrl = this.starWarsService.getStarshipImageUrl(starship.url);
    });
  }*/

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    console.log(`Starship ID: ${id}`); // Añadir log para verificar ID
    this.starship$ = this.starWarsService.getStarshipDetails(id).pipe(
      map(starship => {
        starship.imageUrl = this.starWarsService.getStarshipImageUrl(starship.url);
        console.log(`Starship Image URL: ${starship.imageUrl}`); // Añadir log para verificar URL
        this.loading = false;
        return starship;
      })
    );
  }


  /* ngOnInit(): void {
     const id = this.route.snapshot.paramMap.get('id')!;
     this.starship$ = this.starWarsService.getStarshipDetails(id);
     this.starship$.subscribe(starship => {
       this.loading = false;
       this.imageUrl = this.starWarsService.getStarshipImageUrl(starship.url);
     });
   }*/


  imageError(event: any): void {
    event.target.src = this.errorImageUrl;
  }
  

  /*getImageUrl(url: string): string {
    // Mock implementation, replace with actual logic to get the image URL
    return 'https://via.placeholder.com/600x400'; // Replace with actual logic
  }*/
}



