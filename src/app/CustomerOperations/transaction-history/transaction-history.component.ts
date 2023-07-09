import { Component,OnInit } from '@angular/core';
import { Customer } from 'src/app/Classes/customer';
import { Transaction } from 'src/app/Classes/transaction';
import { CustomerServiceService } from 'src/app/customer-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  constructor(private cService:CustomerServiceService){}
  customer!:Customer;
  transactionList!:Transaction[];
  ngOnInit(): void {
    this.customer = <Customer>UserSingletonClass.getInstance().loginMap.get('customerLogin');
      this.cService.getTransactionDetails(this.customer.accountNumber).subscribe(response =>{
        this.transactionList = response;
      })
  }
}
