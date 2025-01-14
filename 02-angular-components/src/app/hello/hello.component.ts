import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {

  message: string = 'Hello, Welcome to Angular App!';
  name: string = '';

  updateMessage() {
    this.message = `Hello, ${this.name}!`;
  }

}
