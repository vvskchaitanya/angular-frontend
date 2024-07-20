import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MainComponent } from '../main/main.component';
import { FooterComponent } from '../footer/footer.component';
import { SideAdvComponent } from '../side-adv/side-adv.component';

@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [HeaderComponent,SideNavComponent, MainComponent, SideAdvComponent, FooterComponent],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css'
})
export class FirstpageComponent {

}
