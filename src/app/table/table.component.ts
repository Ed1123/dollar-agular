import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DollarExchange, DollarService } from '../dollar.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['exchange_name', 'buy_price', 'sell_price'];
  dataSource = new MatTableDataSource<DollarExchange>();

  constructor(private dollar: DollarService) {
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dollar.getData().subscribe(res => {
      this.dataSource.data = res.filter(exchange => exchange.buy_price != 0);
    })
    // this.dataSource.data = ELEMENT_DATA;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}

const ELEMENT_DATA: DollarExchange[] = [
  {
    exchange_name: 'test',
    buy_price: 3.7,
    sell_price: 3.8,
    url: 'https://www.google.com'
  },
  {
    exchange_name: 'test 1',
    buy_price: 3.8,
    sell_price: 3.9,
    url: 'https://www.google.com'
  },
];
