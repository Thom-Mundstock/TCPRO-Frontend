import { Component, Input } from '@angular/core';
import { TagComponent } from './tag/tag.component';

type projetoStatus = 'EM_ANDAMENTO' | 'FINALIZADO' | 'BACKLOG' | 'PLANEJAMENTO';

@Component({
  selector: 'app-label-projeto-status',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './label-projeto-status.component.html',
  styleUrl: './label-projeto-status.component.css',
})
export class LabelProjetoStatusComponent {
  @Input({ required: true }) tipo!: projetoStatus;
  text!: string;
  color!: string;

  ngOnInit() {
    this.setLabelColor();
    this.labelInit();
  }

  setLabelColor() {
    const labelTipoColor = {
      EM_ANDAMENTO: '#FFB500',
      FINALIZADO: '#7ED298',
      BACKLOG: '#B1B2BE',
      PLANEJAMENTO: '#95B8FC',
    };

    this.color = labelTipoColor[this.tipo as projetoStatus];
  }

  labelInit() {
    const labelTipoText = {
      EM_ANDAMENTO: 'Em andamento',
      FINALIZADO: 'Finalizado',
      BACKLOG: 'Backlog',
      PLANEJAMENTO: 'Planejamento',
    };

    this.text = labelTipoText[this.tipo as projetoStatus];
  }
}
