import { Component } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card.component';

@Component({
  selector: 'trending-movies-list',
  imports: [MovieCard],
  templateUrl: './trending-movies-list.component.html',
})
export class TrendingMoviesList {}
