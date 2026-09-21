import { Component } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card.component';

@Component({
  selector: 'popular-movies-list',
  imports: [MovieCard],
  templateUrl: './popular-movies-list.component.html',
})
export class PopularMoviesList {}
