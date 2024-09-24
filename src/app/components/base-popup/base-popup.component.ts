import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-base-popup',
  templateUrl: './base-popup.component.html',
  styleUrls: ['./base-popup.component.css'],
  imports: [
    BaseButtonComponent,
    CommonModule,
  ],
  standalone: true,
})
export class BasePopupComponent {
  @Input() title: string = '';  
  @Input() width: string = "500px";
  @Input() height: string = "600px"; 
  
  @Output() cancel = new EventEmitter<void>(); 
  @Output() create = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit(); 
  }

  onCreate() {
    this.create.emit(); 
  }
}
