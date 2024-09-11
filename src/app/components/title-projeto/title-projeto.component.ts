import { Component, Input } from '@angular/core';
import { projetoStatus } from '../../../types';
import { TagComponent } from '../label-projeto-status/tag/tag.component';

@Component({
  selector: 'app-title-projeto',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './title-projeto.component.html',
  styleUrl: './title-projeto.component.css'
})
export class TitleProjetoComponent {
      @Input({required: true}) title!: string;
      @Input({required: true}) projetoStatus!: projetoStatus;

      tagColor!: string;

      ngOnInit() {
        this.setLabelColor();
      }

      setLabelColor() {
        const labelTipoColor = {
          EM_ANDAMENTO: '#FFB500',
          FINALIZADO: '#7ED298',
          BACKLOG: '#B1B2BE',
          PLANEJAMENTO: '#95B8FC',
        };
    
        this.tagColor = labelTipoColor[this.projetoStatus];
      }
}
