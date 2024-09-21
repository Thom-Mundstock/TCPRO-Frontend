import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-participant',
  standalone: true,
  imports: [],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.css',
})
export class ParticipantComponent {
  @Input() name: string = '';
  @Input() role: string = '';

  getCircleColor(): string {
    const rootStyles = getComputedStyle(document.documentElement);

    switch (this.role.toLowerCase()) {
      case 'gerente':
        return rootStyles.getPropertyValue('--tertiary').trim();
      case 'unidade envolvida':
        return rootStyles.getPropertyValue('--inputFocus').trim();
      default:
        return rootStyles.getPropertyValue('--secondary').trim();
    }
  }

  // método para retornar as iniciais do nome
  getInitials(): string {
    return this.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2); // retorna as primeiras duas letras
  }
}
