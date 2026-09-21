import { Component } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card.component';

@Component({
  selector: 'top-rated-movies-list',
  imports: [MovieCard],
  templateUrl: './top-rated-movies-list.component.html',
})
export class TopRatedMoviesList {}
