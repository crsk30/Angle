import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`);
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(this.apiUrl, product);
  }
}
