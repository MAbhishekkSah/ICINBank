import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Classes/customer';
import { BankDetails } from './Classes/bank-details';
import { Transaction } from './Classes/transaction';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  
  constructor(private http:HttpClient) { }

  baseUrl:string="http://localhost:8082/customers";

  getAllCustomer():Observable<Customer[]>
  {
    let endPoint = 'getAll';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.get<Customer[]>(`${url}`);
  }
  getCustomerByAccNo(accNo:number): Observable<Customer>{
    let endPoint = 'getCustomerByAccNo';
    let url = `${this.baseUrl}/${endPoint}/${accNo}`;
    console.log("Inside getCustomer -> url = "+url);
    return this.http.get<Customer>(`${url}`);
  }
  getBankDetails(accNo:number): Observable<BankDetails>{
    let endPoint = 'getBankDetails';
    let url = `${this.baseUrl}/${endPoint}/${accNo}`;
    return this.http.get<BankDetails>(`${url}`);
  }
  getTransactionDetails(accNo:number): Observable<Transaction[]>{
    let endPoint = 'getTransactionDetails';
    let url = `${this.baseUrl}/${endPoint}/${accNo}`;
    return this.http.get<Transaction[]>(`${url}`);
  }
  saveCustomer(customer:Customer):Observable<Customer>{
    let endPoint = 'addCustomer';
    let url = `${this.baseUrl}/${endPoint}`;
    return this.http.post<Customer>(`${url}`,customer);
  }
  updateCustomer(id:number,customer:Customer): Observable<Customer>{
    let endPoint = 'update';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    return this.http.put<Customer>(`${url}`,customer);
  }
  
  deleteCustomer(id:number){
    let endPoint = 'delete';
    let url = `${this.baseUrl}/${endPoint}/${id}`;
    console.log("url -> "+`${url}`);
    this.http.delete(`${url}`).subscribe(data =>
      {
        return this.getAllCustomer();
      });
  }
}
