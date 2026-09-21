import { Component } from '@angular/core';
import { FeatureMovie } from '../components/featured-movie/featured-movie.component';
import { TrendingMoviesList } from '../components/trending-movies-list/trending-movies-list.component';
import { PopularMoviesList } from '../components/popular-movies-list/popular-movies-list.component';
import { TopRatedMoviesList } from '../components/top-rated-movies-list/top-rated-movies-list.component';
import { ComingSoonList } from '../components/coming-soon-list/coming-soon-list.component';
import { ActionMoviesList } from '../components/action-movies-list/action-movies-list.component';
import { ScienceFictionMoviesList } from '../components/science-fiction-movies-list/science-fiction-movies-list.component';

@Component({
  selector: 'home-page',
  imports: [
    FeatureMovie,
    TrendingMoviesList,
    PopularMoviesList,
    TopRatedMoviesList,
    ComingSoonList,
    ActionMoviesList,
    ScienceFictionMoviesList,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePage {}
