import { Component } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card.component';

@Component({
  selector: 'science-fiction-movies-list',
  imports: [MovieCard],
  templateUrl: './science-fiction-movies-list.component.html',
})
export class ScienceFictionMoviesList {}
