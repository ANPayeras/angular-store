// los services sirven para llamar y enviar datos a las APi de mejor forma
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // private apiURL = 'http://localhost:3001/products'
  private apiURL = 'https://fake-server-angular-store.herokuapp.com/products'
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURL)
  }

  updateStock(productId: number, stock: number): Observable<any> {
    const body = { "stock": stock }
    return this.http.patch<any>(`${this.apiURL}/${productId}`, body)
  }
}
