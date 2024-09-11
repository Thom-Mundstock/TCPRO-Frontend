import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-input.component.html',
  styleUrl: './base-input.component.css',
})
export class BaseInputComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() value: any = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() width: string = '100%';
  @Output() valueChange = new EventEmitter<any>();

  handleOnChange(event: any) {
    this.valueChange.emit(event.target.value);
  }
}
