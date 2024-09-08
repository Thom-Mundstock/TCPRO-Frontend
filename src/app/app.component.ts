import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseButtonComponent } from './components/base-button/base-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SGP-Frontend';
}
