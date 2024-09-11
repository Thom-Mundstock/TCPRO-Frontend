import { Component } from '@angular/core';
import { LinkComponent } from './link/link.component';

@Component({
  selector: 'app-nav-bar-projeto',
  standalone: true,
  imports: [LinkComponent],
  templateUrl: './nav-bar-projeto.component.html',
  styleUrl: './nav-bar-projeto.component.css',
})
export class NavBarProjetoComponent {}
