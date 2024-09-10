import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-project-card-empty-state',
  standalone: true,
  imports: [],
  templateUrl: './project-card-empty-state.component.html',
  styleUrl: './project-card-empty-state.component.css'
})
export class ProjectCardEmptyStateComponent {

  @Input() projectType: string = 'EM_ANDAMENTO';

  getProjectTypeText() {
    switch(this.projectType) {
      case 'EM_ANDAMENTO':
        return 'projetos em planejamento';
      case 'PLANEJAMENTO':
        return 'projetos em andamento';
      case 'BACKLOG':
        return 'projetos em backlog';
      case 'FINALIZADO':
        return 'projetos finalizados';
      default:
        return 'projetos';
    }
  }
}
