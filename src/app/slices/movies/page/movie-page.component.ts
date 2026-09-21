import { Component } from '@angular/core';
import { FilterSidenav } from '../components/filter-sidenav/filter-sidenav.component';
import { MoviePageList } from '../components/movie-page-list/movie-page-list.component';

@Component({
  selector: 'movie-page',
  imports: [FilterSidenav, MoviePageList],
  templateUrl: './movie-page.component.html',
})
export class MoviePage {}
