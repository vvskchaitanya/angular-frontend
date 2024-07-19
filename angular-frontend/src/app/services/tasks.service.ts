import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks=[
    {name:"My Task 1", target:"19-07-2024"},
    {name:"My Task 2", target:"30-07-2024"}
  ]

  constructor() { }
}
