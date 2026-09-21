import { Component } from '@angular/core';
import { FeatureMovie } from '../components/featured-movie/featured-movie.component';

@Component({
  selector: 'home-page',
  imports: [FeatureMovie],
  templateUrl: './home-page.component.html',
})
export class HomePage {}
