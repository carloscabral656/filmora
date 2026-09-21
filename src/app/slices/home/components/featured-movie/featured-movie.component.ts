import { Component } from '@angular/core';
import { FeaturedTitle } from '../../../../shared/components/featured-title/featured-title.component';
import { DsButton } from '../../../../shared/components/ds-button/ds-button.component';
import { MovieRating } from '../../../../shared/components/movie-rating/movie-rating.component';
import { IconButton } from '../../../../shared/components/icon-button/icon-button.component';

@Component({
  selector: 'featured-movie',
  imports: [FeaturedTitle, DsButton, MovieRating, IconButton],
  templateUrl: './featured-movie.component.html',
})
export class FeatureMovie {}
