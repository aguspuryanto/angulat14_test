import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
    
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Barang } from './barang';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  
  private apiURL = "https://fakestoreapi.com";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Barang[]> {
    return this.httpClient.get<Barang[]>(this.apiURL + '/products/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(post: any): Observable<Barang> {
    return this.httpClient.post<Barang>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: string): Observable<Barang> {
    return this.httpClient.get<Barang>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: string, post: any): Observable<Barang> {
    return this.httpClient.put<Barang>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number): Observable<Barang> {
    return this.httpClient.delete<Barang>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
     
   
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
