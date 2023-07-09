import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from './Classes/transaction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:8082/transactions";
  saveCustomer(transaction:Transaction):Observable<Transaction>{
    let endPoint = 'add';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.post<Transaction>(`${url}`,transaction);
  }

}
