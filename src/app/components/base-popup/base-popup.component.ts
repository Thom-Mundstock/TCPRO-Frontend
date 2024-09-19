import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BaseButtonComponent } from '../base-button/base-button.component';

@Component({
  selector: 'app-popup',
  templateUrl: './base-popup.component.html',
  styleUrls: ['./base-popup.component.css'],
  imports: [
    BaseButtonComponent
  ],
  standalone: true,
})
export class PopupComponent {
  @Input() title: string = '';  
  @Input() width: string = "500px";
  @Input() height: string = "500px"; 
  
  @Output() cancel = new EventEmitter<void>(); 
  @Output() create = new EventEmitter<void>();

  onCancel() {
    this.cancel.emit(); 
  }

  onCreate() {
    this.create.emit(); 
  }
}
