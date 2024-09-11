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

  // método para retornar as iniciais do nome
  getInitials(): string {
    return this.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2); // retorna as primeiras duas letras
  }

  // método para retornar a cor do avatar
  getCircleColor(): string {
    switch (this.role.toLowerCase()) {
      case 'gerente':
        return '#FF7077';
      case 'unidade envolvida':
        return '#FFC6C8';
      default:
        return '#9696FF';
    }
  }
}
