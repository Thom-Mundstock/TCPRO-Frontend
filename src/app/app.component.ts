import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseInputComponent } from "./components/base-input/base-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseInputComponent, BaseInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SGP-Frontend';
}
