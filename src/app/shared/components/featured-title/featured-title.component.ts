import { Component, input } from '@angular/core';

@Component({
  selector: 'featured-title',
  imports: [],
  templateUrl: './featured-title.component.html',
})
export class FeaturedTitle {
  title = input.required<string>();
}
