import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-taskitem',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taskitem.component.html',
  styleUrl: './taskitem.component.scss'
})
export class TaskitemComponent {
@Input() taskName!: string;
@Input() dueDate!:Date;
@Input() status!: 'completed' | 'pending'
@Output() Completed= new EventEmitter<void>();

onComplited (){
  this.Completed.emit();
}

}
