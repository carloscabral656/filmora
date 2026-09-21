import { Component, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'icon-button',
  imports: [LucideDynamicIcon],
  templateUrl: './icon-button.component.html',
})
export class IconButton {
  icon = input<string>('');
}
