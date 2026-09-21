import { Component, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'movie-rating',
  imports: [LucideDynamicIcon],
  templateUrl: './movie-rating.component.html',
})
export class MovieRating {
  rating = input.required<number>();
}
