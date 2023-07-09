import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Classes/customer';
import { CustomerServiceService } from 'src/app/customer-service.service';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  customersList!:Customer[];
  flag:boolean = false;
  constructor(private cService:CustomerServiceService, private _router:Router ){}
  ngOnInit() {
    this.cService.getAllCustomer().subscribe(response => 
      this.customersList = response);
  }
  user = {
    loginId:'',
    loginPassword:''
  }
  checkUser(){
    if(!this.user.loginId || !this.user.loginPassword){
      alert("Please Enter Customer Id or Password!");
      return;
    }
    let ctr = 0;
    while(this.customersList[ctr]!=null)
    {
      if(this.customersList[ctr].loginId==this.user.loginId && this.customersList[ctr].loginPassword==this.user.loginPassword)
      {
          this.flag  =true;
          alert("Welcome "+this.customersList[ctr].name + "!");
          UserSingletonClass.getInstance().loginMap.set('customerLogin',this.customersList[ctr]);
          this._router.navigate(['home']);
      }
      ctr++;
    }
    if(this.flag==false)
    {
      alert("Please Enter Valid Credentials!");
      this.user.loginId = '';
      this.user.loginPassword = '';
      return;
    }
  }
}
