

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipsListComponent } from './components/starships-list/starships-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'starships', component: StarshipsListComponent },
  { path: 'starship/:id', component: StarshipDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];
