import { Component } from '@angular/core';
import { FeatureMovie } from '../components/featured-movie/featured-movie.component';
import { TrendingMoviesList } from '../components/trending-movies-list/trending-movies-list.component';

@Component({
  selector: 'home-page',
  imports: [FeatureMovie, TrendingMoviesList],
  templateUrl: './home-page.component.html',
})
export class HomePage {}
