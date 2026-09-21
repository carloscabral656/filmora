import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomePage } from './slices/home/page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
