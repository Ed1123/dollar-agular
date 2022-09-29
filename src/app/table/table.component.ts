import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'buy_price', 'sell_price', 'url'];
  dataSource: DollarExchange[] = ELEMENT_DATA;

  ngOnInit(): void {
  }

}

export interface DollarExchange {
  name: string;
  buy_price: number;
  sell_price: number;
  url: string;
}

const ELEMENT_DATA: DollarExchange[] = [
  {
    name: 'test',
    buy_price: 3.8,
    sell_price: 3.9,
    url: 'test.com'
  },
  {
    name: 'test',
    buy_price: 3.8,
    sell_price: 3.9,
    url: 'test.com'
  },
];