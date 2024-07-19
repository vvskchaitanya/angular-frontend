import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharesService {

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

  constructor() { }
}
