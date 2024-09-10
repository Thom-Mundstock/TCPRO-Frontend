import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.svg',
  styleUrl: './tag.component.css'
})
export class TagComponent {
    @Input({required: true}) color!: string;
}
