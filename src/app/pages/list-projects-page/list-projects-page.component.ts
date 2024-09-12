import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from '../../components/navigation-bar/navigation-bar.component';
import { LabelProjetoStatusComponent } from '../../components/label-projeto-status/label-projeto-status.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { BaseButtonComponent } from '../../components/base-button/base-button.component';
import {
  CardProjetoComponent,
  CardProjetoInput,
} from '../../components/card-projeto/card-projeto.component';

@Component({
  selector: 'app-list-projects-page',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    CardProjetoComponent,
    LabelProjetoStatusComponent,
    FilterComponent,
    BaseButtonComponent,
  ],
  templateUrl: './list-projects-page.component.html',
  styleUrl: './list-projects-page.component.css',
})
export class ListProjectsPageComponent {
  projetoAndamento: CardProjetoInput = {
    nome: 'Projeto Exemplo',
    progress: 50,
    status: 'EM_ANDAMENTO',
    dataInicio: '2024-01-01',
    dataPrazo: '2024-12-31',
  };

  projetoPlanejamento: CardProjetoInput = {
    nome: 'Projeto Exemplo',
    progress: 50,
    status: 'PLANEJAMENTO',
    dataInicio: '2024-01-01',
    dataPrazo: '2024-12-31',
  };

  projetoBacklog: CardProjetoInput = {
    nome: 'Projeto Exemplo',
    progress: 50,
    status: 'BACKLOG',
    dataInicio: '2024-01-01',
    dataPrazo: '2024-12-31',
  };

  projetoFinalizado: CardProjetoInput = {
    nome: 'Projeto Exemplo',
    progress: 50,
    status: 'FINALIZADO',
    dataInicio: '2024-01-01',
    dataPrazo: '2024-12-31',
  };
}
