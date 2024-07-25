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
  loading: boolean = true;
  errorImageUrl: string = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg';

  constructor(
    private route: ActivatedRoute,
    private starWarsService: StarWarsService
  ) { }


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

  imageError(event: any): void {
    event.target.src = this.errorImageUrl;
  }

}



