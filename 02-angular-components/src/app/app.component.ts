import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { H100Component } from './h100/h100.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent,H100Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-angular-components';
}
