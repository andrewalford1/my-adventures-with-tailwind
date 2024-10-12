import { Routes } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full',
  },
  {
    path: 'slides',
    component: SlideshowComponent,
  },
];
