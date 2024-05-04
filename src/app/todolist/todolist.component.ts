import { Component } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [MatButtonModule,
    CommonModule,
    
  ],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  task: any[] = [];

  addTask(data : string) {
    
    this.task.push(data);
    console.log(this.task);
  }
}
