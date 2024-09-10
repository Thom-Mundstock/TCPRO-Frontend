import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-progress-bar-projeto',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar-projeto.component.html',
  styleUrl: './progress-bar-projeto.component.css'
})
export class ProgressBarProjetoComponent {
  @Input({required: true,transform: numberAttribute })
  progress!: number;
  progressBarInnerStyle!: string;

  ngOnInit() {
    this.progressBarInnerStyle = `
            background-color: ${this.getProgressBarColor()}; 
            width: ${this.progress}%;
          `
  }
  
  getProgressBarColor(): string {
    const progressBarColors = {
      "low": "#F57C83",
      "medium": "#F5CF71",
      "high": "#7ED298"	
    }

    const progressBarColorKey = this.progress <= 40 ? "low" : this.progress <= 65 ? "medium" : "high"

    return progressBarColors[progressBarColorKey]
  }
}
