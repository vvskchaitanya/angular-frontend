import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ng-for-example.component.html',
  styleUrl: './ng-for-example.component.css'
})
export class NgForExampleComponent {

  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

}
