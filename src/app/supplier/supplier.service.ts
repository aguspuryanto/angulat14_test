import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  private apiURL = "https://fakestoreapi.com";
    
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.apiURL + '/users/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  create(post: any): Observable<Supplier> {
    return this.httpClient.post<Supplier>(this.apiURL + '/users/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
    
  find(id: string): Observable<Supplier> {
    return this.httpClient.get<Supplier>(this.apiURL + '/users/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  update(id: string, post: any): Observable<Supplier> {
    return this.httpClient.put<Supplier>(this.apiURL + '/users/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  delete(id: number): Observable<Supplier> {
    return this.httpClient.delete<Supplier>(this.apiURL + '/users/' + id, this.httpOptions)
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
