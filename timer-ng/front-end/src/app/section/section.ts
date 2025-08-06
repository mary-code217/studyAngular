import { Component, signal } from '@angular/core';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [TimeDisplayComponent, ButtonsComponent],
  templateUrl: './section.html',
  styleUrls: ['./section.scss'],
})
export class Section {}
