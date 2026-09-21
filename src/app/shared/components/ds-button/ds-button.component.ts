import { Component, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'ds-button',
  imports: [LucideDynamicIcon],
  templateUrl: './ds-button.component.html',
})
export class DsButton {
  label = input.required<string>();
  leftIcon = input<string>('');
}
