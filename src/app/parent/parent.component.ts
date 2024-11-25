import { Component } from '@angular/core';
import { Task } from '../shared/interface.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HighlightUrgentDirectiveDirective } from '../shared/highlight-urgent-directive.directive';
import { TaskitemComponent } from "../taskitem/taskitem.component";
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [FormsModule, CommonModule, HighlightUrgentDirectiveDirective, TaskitemComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  public tasks: Task[] = [
    { id: 1, name: 'Task 1', dueDate: new Date(), status: 'pending' },
    { id: 2, name: 'Task 2', dueDate: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000), status: 'pending' },
    { id: 3, name: 'Task 3', dueDate: new Date(), status: 'completed' },
  ];

  filterStatus: 'all' | 'completed' | 'pending' = 'all';

  addtask(taskName: string, dueDate: string) {
    this.tasks.push({
      id: this.tasks.length + 1,
      name: taskName,
      dueDate: new Date(dueDate),
      status: 'pending',
    });
  }

  ascompleted(task: Task) {
    task.status = 'completed';
  }

  toggle() {
    this.filterStatus = this.filterStatus === 'completed' ? 'pending' : 'completed';
  }
}
