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

  displayedColumns: string[] = ['name', 'buy_price', 'sell_price', 'url'];
  dataSource = new MatTableDataSource<DollarExchange>();

  constructor(private dollar: DollarService) {
  }

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dollar.getData().subscribe(res => {
      this.dataSource.data = res.filter(exchange => exchange.buy_price != 0);
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
