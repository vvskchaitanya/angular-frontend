import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { H100Component } from './h100/h100.component';
import { FirstpageComponent } from './my-website/firstpage/firstpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloComponent,H100Component,FirstpageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '02-angular-components';
}
