import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../pipes/reverse.pipe';
import { SharesService } from '../services/shares.service';

@Component({
  selector: 'app-shares',
  standalone: true,
  imports: [NgFor,UpperCasePipe, CurrencyPipe, DatePipe, ReversePipe],
  templateUrl: './shares.component.html',
  styleUrl: './shares.component.css'
})
export class SharesComponent {

  shares:any[] = [];

  constructor(sharesService:SharesService){
    this.shares = sharesService.shares;
  }

}
