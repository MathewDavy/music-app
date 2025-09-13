import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// import { appConfig } from './app.config'; // Optional: for providers and other configuration

bootstrapApplication(AppComponent) // Using bootstrapApplication
  .catch((err) => console.error(err));
