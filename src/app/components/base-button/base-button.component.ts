import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-button.component.html',
  styleUrl: './base-button.component.css',
})
export class BaseButtonComponent {
  @Input() text: string = '';
  @Input() width: string = '100%';
  @Input() height: string = '2.5rem';
  @Input() isOutline: boolean = false;
  @Input() icon: string = '';
  @Input() borderRadius: string = '0.5rem';
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    this.onClick.emit();
  }
}