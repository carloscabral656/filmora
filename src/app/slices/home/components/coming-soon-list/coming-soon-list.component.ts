import { Component } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card.component';

@Component({
  selector: 'coming-soon-list',
  imports: [MovieCard],
  templateUrl: './coming-soon-list.component.html',
})
export class ComingSoonList {}
