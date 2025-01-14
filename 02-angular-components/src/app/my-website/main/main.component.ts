import { Component } from '@angular/core';
import { HelloComponent } from '../../hello/hello.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HelloComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
