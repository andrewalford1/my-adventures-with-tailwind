import { Routes } from '@angular/router';
import { SlidesComponent } from './slides/slides.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full',
  },
  {
    path: 'slides',
    component: SlidesComponent,
  },
];
