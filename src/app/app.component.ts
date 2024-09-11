import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseInputComponent } from './components/base-input/base-input.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProjectCardEmptyStateComponent } from './components/project-card-empty-state/project-card-empty-state.component';
import { ParticipantComponent } from './components/participant/participant.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BaseInputComponent,
    NavigationBarComponent,
    ProjectCardEmptyStateComponent,
    ParticipantComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SGP-Frontend';
}
