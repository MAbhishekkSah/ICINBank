import { Component,OnInit } from '@angular/core';
import { Customer } from 'src/app/Classes/customer';
import { CustomerServiceService } from 'src/app/customer-service.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  constructor(private cService:CustomerServiceService){}
  customersList!:Customer[];
  flag:boolean = true;
  ngOnInit(): void {
      this.cService.getAllCustomer().subscribe(response =>
        this.customersList = response);
  }
  deleteItem(accNo:any){

  }
  grantPermission(accNo:any){

  }
}
