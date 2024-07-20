import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIfExampleComponent } from './ng-if-example/ng-if-example.component';
import { NgForExampleComponent } from './ng-for-example/ng-for-example.component';
import { NgClassExampleComponent } from './ng-class-example/ng-class-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIfExampleComponent,NgForExampleComponent,NgClassExampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '03-angular-directives';
}
