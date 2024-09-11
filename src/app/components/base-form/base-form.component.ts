import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './base-form.component.html',
  styleUrl: './base-form.component.css'
})
export class BaseFormComponent {
  @Input() formGroup!: FormGroup;
  @Input() fields!: {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
    required: boolean;
    width: string;
  }[];

  ngOnInit() {
    console.log('formGroup', this.fields);
  }
}
