import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


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
  url = `${environment.dollarApiUrl}/rates`;

  constructor(private http: HttpClient) { }

  getData(): Observable<DollarExchange[]> {
    return this.http.get<DollarExchange[]>(this.url)
  }
}
