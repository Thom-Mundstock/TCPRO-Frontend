import { Component } from '@angular/core';
import { ProgressBarProjetoComponent } from "./progress-bar-projeto/progress-bar-projeto.component";

type projetoStatus = "EM_ANDAMENTO" | "FINALIZADO" | "BACKLOG" | "PLANEJAMENTO";

@Component({
  selector: 'app-card-projeto',
  standalone: true,
  imports: [ProgressBarProjetoComponent],
  templateUrl: './card-projeto.component.html',
  styleUrl: './card-projeto.component.css'
})
export class CardProjetoComponent {
    projeto = {
        nome: "Projeto 1",
        progress: 50,
        status:"EM_ANDAMENTO",
        dataInicio: "01/01/23",
        dataPrazo: "01/01/24",
    }

    cardCoverStyle!: string;
    bulletStatusColorStyle!: string;

    projetoCovers = {
        "EM_ANDAMENTO": {
          baseDir: "em_andamento_",
          qtd: 3
        },
        "FINALIZADO": {
          baseDir: "finalizado_",
          qtd: 1
        },
        "BACKLOG": {
          baseDir: "backlog_",
          qtd: 1
        },
        "PLANEJAMENTO": {
          baseDir: "planejamento_",
          qtd: 2
        }
    }

    ngOnInit() {
      this.setProjetoCoverPath();
      this.setBulletStatusColor();
    }

    setProjetoCoverPath() {

        const cardCoverBasePath = "/assets/card-projeto-covers/";
        const coverDir = this.projetoCovers[this.projeto.status as projetoStatus].baseDir;
        const coverQtd = this.projetoCovers[this.projeto.status as projetoStatus].qtd;
        const coverIndex = Math.floor(Math.random() * coverQtd) + 1;

        const cardCoverPath = `${cardCoverBasePath}${coverDir}${coverIndex}.svg`

        this.cardCoverStyle = `
            background-image: url(${cardCoverPath});
          `;
    }

    setBulletStatusColor() {
        const bulletColors = {
          "EM_ANDAMENTO": "#FFB500",
          "FINALIZADO": "#7ED298",
          "BACKLOG": "#B1B2BE",
          "PLANEJAMENTO": "#95B8FC"
        }

        this.bulletStatusColorStyle = `background-color: ${bulletColors[this.projeto.status as projetoStatus]};`;
    }
}
