import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-project-type-label',
  templateUrl: './project-type-label.component.html',
  styleUrls: ['./project-type-label.component.css']
})
export class ProjectTypeLabelComponent {

  //passa o status do projeto para o componente
  @Input() status: string = ''; 
projectType: any;

  // define a cor do label de acordo com o status do projeto
  getStatusIcon(): string {
    switch (this.status.toLowerCase()) {
      case 'em andamento':
        return 'assets/icons/tagYellow.svg';
      case 'planejamento':
        return 'assets/icons/tagBlue.png';
      case 'finalizado':
        return 'assets/icons/tagGreen.png';
      default:
        return 'assets/icons/tagGrey.png';
    }
  }
}