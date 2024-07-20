import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-example',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-class-example.component.html',
  styleUrl: './ng-class-example.component.css'
})
export class NgClassExampleComponent {

  isHighlighted: boolean = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

}
