import { Component } from '@angular/core';
import { MovieRating } from '../../../../shared/components/movie-rating/movie-rating.component';
import { IconButton } from '../../../../shared/components/icon-button/icon-button.component';

@Component({
  selector: 'movie-card',
  imports: [MovieRating, IconButton],
  templateUrl: './movie-card.component.html',
})
export class MovieCard {}
