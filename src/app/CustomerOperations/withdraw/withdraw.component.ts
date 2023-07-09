import { Component,OnInit } from '@angular/core';
import { BankDetails } from 'src/app/Classes/bank-details';
import { Customer } from 'src/app/Classes/customer';
import { Transaction } from 'src/app/Classes/transaction';
import { CustomerServiceService } from 'src/app/customer-service.service';
import { TransactionServiceService } from 'src/app/transaction-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  constructor(private cService:CustomerServiceService, private tService:TransactionServiceService){}
  customer= new Customer();
  cust!:Customer;
  bankDetails = new BankDetails();
  transaction = new Transaction();
  accountBalance!:number;
  flag:boolean = false;
  user = {
    accNo: 0,
    transactionKey:'',
    amount:0
  }
  ngOnInit(): void {
    console.log("Customer --> ");
    this.cust = <Customer>UserSingletonClass.getInstance().loginMap.get('customerLogin');
    this.cService.getCustomerByAccNo(this.cust.accountNumber).subscribe(resp => {this.customer = resp;
      console.log("Custeomer -> "+this.customer);
      this.cService.getBankDetails(<number>this.customer.accountNumber).subscribe(response =>
        this.bankDetails = response
    );
    this.user.accNo = this.customer.accountNumber;
    });
  }

  withdrawAmount(){
    if(this.user.transactionKey == this.customer.transactionKey){
    if(this.bankDetails.balance < this.user.amount)
    {
      alert("Not Sufficient Balance! Try Lesser Amount.");
      this.user.transactionKey = '';
    }
    if(this.bankDetails.balance >= this.user.amount)
    {
      this.accountBalance = this.customer.bankDetails.balance - this.user.amount;
      let cust = new  Customer();
      cust = this.customer;
      cust.bankDetails.balance = this.accountBalance;
      console.log("Balance Left = "+cust.bankDetails.balance);
      this.cService.updateCustomer(this.customer.accountNumber,cust).subscribe(data => {this.customer = data;
      console.log("Actual Balance = "+this.customer.bankDetails.balance)});
      alert("Your Transaction was successful!");
      this.transaction.accountNo = this.customer.accountNumber;
      this.transaction.amount = this.user.amount;
      this.transaction.action = 'Withdraw';
      this.transaction.mode = 'Online';
      this.tService.saveCustomer(this.transaction).subscribe();
      this.user.transactionKey = '';
      this.user.amount = 0;
    }
  }
  else{
    alert("Enter correct Transaction Key!");
    this.user.transactionKey = '';
    this.user.amount = 0;
  }
  }
  checkBalance(){
    this.flag = true;
    this.cService.getBankDetails(this.customer.accountNumber).subscribe(data =>
      this.accountBalance = data.balance);
  }
}
