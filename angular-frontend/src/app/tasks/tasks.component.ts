import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NgIf,NgFor,FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  task:Task = { name :"", target:""};
  
  tasks:Task[] = [];


  add(){
    this.tasks.push(new Task(this.task.name,this.task.target));
  }

}

export class Task{
  name?:string;
  target?:string;

  constructor(name?:string,target?:string){
    this.name = name;
    this.target = target;
  }

}