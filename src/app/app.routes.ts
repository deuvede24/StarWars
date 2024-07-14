/*import { Routes } from '@angular/router';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';

const routes: Routes = [
  { path: '', component: StarshipsListComponent },
  // Puedes añadir más rutas aquí
];

export default routes;*/

/*import { Routes } from '@angular/router';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';

const routes: Routes = [
  { path: '', component: StarshipsListComponent },
  // Puedes añadir más rutas aquí
];

export { routes };*/

/*import { Routes } from '@angular/router';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';

const appRoutes: Routes = [
  { path: '', component: StarshipsListComponent },

];

export { appRoutes };*/

/*import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';

 const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'starships/:id', component: StarshipDetailsComponent },
];
export { routes };*/


/*import { Routes } from '@angular/router';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';

const routes: Routes = [
  { path: '', component: StarshipsListComponent },
  // Puedes añadir más rutas aquí
];

export { routes };*/

/*import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'starships/:id', component: StarshipDetailsComponent }
];

export { routes };*/



/*import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'starships-list', component: StarshipsListComponent },
  { path: 'starships-details/:id', component: StarshipDetailsComponent },
  //{ path: '**', redirectTo: 'home' }
  
];*/

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'starship/:id', component: StarshipDetailsComponent },
];
