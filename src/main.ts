/*import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/
  
  
  /*import { bootstrapApplication } from '@angular/platform-browser';
  import { AppComponent } from './app/app.component';
  import { provideHttpClient } from '@angular/common/http';
  import { provideRouter } from '@angular/router';
  import { Routes } from './app/app.routes';
  
  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      provideRouter(Routes)
    ]
  })
  .catch(err => console.error(err));
  */
  

  import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes)
  ]
}).catch(err => console.error(err));

