import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Section } from './section/section';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, Section, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('front-end');
}
