import { Component, Input } from '@angular/core';
import { ProgressBarProjetoComponent } from './progress-bar-projeto/progress-bar-projeto.component';
import { ActivatedRoute, Router } from '@angular/router';

type projetoStatus = 'EM_ANDAMENTO' | 'FINALIZADO' | 'BACKLOG' | 'PLANEJAMENTO';

export interface CardProjetoInput {
  nome: string;
  progress: number;
  status: projetoStatus;
  dataInicio: string;
  dataPrazo: string;
}

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [ProgressBarProjetoComponent],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.css',
})
export class CardProjetoComponent {
  @Input({ required: true }) projeto!: CardProjetoInput; // Adiciona a propriedade projeto ao componente CardProjetoComponent

  constructor(
    private route: ActivatedRoute,
    private router: Router){}

  cardCoverStyle!: string;
  bulletStatusColorStyle!: string;

  projetoCovers = {
    EM_ANDAMENTO: {
      baseDir: 'em_andamento_',
      qtd: 3,
    },
    FINALIZADO: {
      baseDir: 'finalizado_',
      qtd: 1,
    },
    BACKLOG: {
      baseDir: 'backlog_',
      qtd: 1,
    },
    PLANEJAMENTO: {
      baseDir: 'planejamento_',
      qtd: 2,
    },
  };

  ngOnInit() {
    this.setProjetoCoverPath();
    this.setBulletStatusColor();
  }

  setProjetoCoverPath() {
    const cardCoverBasePath = '/assets/card-projeto-covers/';
    const coverDir =
      this.projetoCovers[this.projeto.status as projetoStatus].baseDir;
    const coverQtd =
      this.projetoCovers[this.projeto.status as projetoStatus].qtd;
    const coverIndex = Math.floor(Math.random() * coverQtd) + 1;

    const cardCoverPath = `${cardCoverBasePath}${coverDir}${coverIndex}.svg`;

    this.cardCoverStyle = `
            background-image: url(${cardCoverPath});
          `;
  }

  setBulletStatusColor() {
    const bulletColors = {
      EM_ANDAMENTO: '#FFB500',
      FINALIZADO: '#7ED298',
      BACKLOG: '#B1B2BE',
      PLANEJAMENTO: '#95B8FC',
    };

    this.bulletStatusColorStyle = `background-color: ${
      bulletColors[this.projeto.status as projetoStatus]
    };`;
  }

  navigateToProjetoAndStorageData() {
      localStorage.setItem('projeto', JSON.stringify(this.projeto));

      this.router.navigate(['projeto']);

  }
}
