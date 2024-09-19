import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProjectCardEmptyStateComponent } from './components/project-card-empty-state/project-card-empty-state.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './services/auth/auth.service';
import { PopupComponent } from './components/base-popup/base-popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginPageComponent,
    NavigationBarComponent,
    ProjectCardEmptyStateComponent,
    ParticipantComponent,
    PopupComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public authService: AuthService) {}
  title = 'SGP-Frontend';
}
