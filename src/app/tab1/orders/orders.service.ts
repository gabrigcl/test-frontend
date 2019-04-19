import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl = 'http://5cb76829a3763800149fd698.mockapi.io/api/v1';

  constructor(
    private http: HttpClient
  ) { }

  getOrders(page: number = null) {
    return this.http.get<any>(`${this.apiUrl}/orders${(page) ? '/' + page : ''}`);
  }
}
