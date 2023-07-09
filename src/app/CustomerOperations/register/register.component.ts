import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerServiceService } from 'src/app/customer-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(private cService:CustomerServiceService, private _router:Router){}
  userForm!:FormGroup;

  ngOnInit(): void {
      this.userForm = new FormGroup({
        name: new FormControl(''),
        emailId: new FormControl(''),
        loginId: new FormControl(''),
        loginPassword: new FormControl(''),
        transactionKey: new FormControl(''),
        dob: new FormControl(''),
        isActive: new FormControl(''),
        address: new FormGroup({
          contactNo: new FormControl(''),
          areaName: new FormControl(''),
          dist: new FormControl(''),
          state: new FormControl(''),
          country: new FormControl(''),
          pinCode: new FormControl('')
        }),
        bankDetails: new FormGroup({
          bankName: new FormControl(''),
          ifscCode: new FormControl(''),
          branchName: new FormControl(''),
          branchCode: new FormControl(''),
          balance: new FormControl(0.0)
        })
      });
  }
  onSubmit(){
    //this.cService.saveCustomer(this.userForm.value).subscribe();
    this._router.navigate(['login']);
  }
}
