import { Component } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card.component';

@Component({
  selector: 'action-movies-list',
  imports: [MovieCard],
  templateUrl: './action-movies-list.component.html',
})
export class ActionMoviesList {}
