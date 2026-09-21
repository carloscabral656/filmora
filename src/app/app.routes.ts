import { Routes } from '@angular/router';
import { HomePage } from './slices/home/page/home-page.component';
import { MoviePage } from './slices/movies/page/movie-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'movies',
    component: MoviePage,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
