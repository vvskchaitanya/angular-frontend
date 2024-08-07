import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { SharesComponent } from './shares/shares.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TasksComponent,SharesComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-frontend';
}
