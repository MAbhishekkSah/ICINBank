import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSingletonClass } from 'src/app/user-singleton-class';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private _router:Router){}
  ngOnInit(): void {
      
  }
  user = {
    loginId:'',
    loginPassword:''
  }
  checkUser(){
    if(!this.user.loginId || !this.user.loginPassword){
      alert("Please Enter Customer Id or Password!");
      this.user.loginId = '';
      this.user.loginPassword = '';
      return;
    }
    if(this.user.loginId=='Admin' && this.user.loginPassword == 'admin')
    {
      alert("Welcome Admin!");
      UserSingletonClass.getInstance().loginMap.set('adminLogin','Admin');
      this._router.navigate(['viewCustomer']);
    }
    else{
      alert("Please Enter Correct Credentials");
      this.user.loginId = '';
      this.user.loginPassword = '';
      return;
    }
  }
}
