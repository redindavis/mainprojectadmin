import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products'; 
  

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<any>('https://fakestoreapi.com/products');
  }

  createProduct(productData: any): Observable<any> {
    return this.http.post(this.apiUrl, productData);
  }
}

