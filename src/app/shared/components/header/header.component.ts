import { Component } from '@angular/core';
import { IconButton } from '../icon-button/icon-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header-component',
  imports: [IconButton, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
