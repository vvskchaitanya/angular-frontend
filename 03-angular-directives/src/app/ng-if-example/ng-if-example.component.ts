import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ng-if-example.component.html',
  styleUrl: './ng-if-example.component.css'
})
export class NgIfExampleComponent {

  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
