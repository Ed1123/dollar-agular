import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {

  constructor() { }

  displayedColumns: string[] = ['name', 'buy_price', 'sell_price', 'url'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
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
    buy_price: 3.7,
    sell_price: 3.8,
    url: 'test.com'
  },
  {
    name: 'test',
    buy_price: 3.8,
    sell_price: 3.9,
    url: 'test.com'
  },
];