import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface DollarExchange {
  exchange_name: string;
  url: string;
  buy_price: number;
  sell_price: number;
}

@Injectable({
  providedIn: 'root'
})
export class DollarService {
  url = 'http://127.0.0.1:8000/rates';

  constructor(private http: HttpClient) { }

  getData(): Observable<DollarExchange[]> {
    return this.http.get<DollarExchange[]>(this.url)
  }
}
