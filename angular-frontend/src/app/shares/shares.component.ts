import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../pipes/reverse.pipe';

@Component({
  selector: 'app-shares',
  standalone: true,
  imports: [NgFor,UpperCasePipe, CurrencyPipe, DatePipe, ReversePipe],
  templateUrl: './shares.component.html',
  styleUrl: './shares.component.css'
})
export class SharesComponent {

  shares = [{
    name: "Reliance Industries",
    price: 3170.35,
    date: new Date(),
    quantity: 200
  },{
    name: "Tata Consultancy Services",
    price: 4310.30,
    date: new Date(),
    quantity: 200
  }]

}
