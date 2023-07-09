import { Component } from '@angular/core';
import { UserSingletonClass } from './user-singleton-class';
import { Customer } from './Classes/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ICINBank';

  loggedUser!:string;
  customer!:Customer;
  isUserLoggedIn():string{
    if(UserSingletonClass.getInstance().loginMap.has('customerLogin'))
    {
        this.customer = <Customer>UserSingletonClass.getInstance().loginMap.get('customerLogin');
        this.loggedUser = this.customer.name;
        return 'Y';
    }
    return 'N';
  }
  isAdminLoggedIn():string{
    if(UserSingletonClass.getInstance().loginMap.has('adminLogin'))
    {
        this.loggedUser = <string>UserSingletonClass.getInstance().loginMap.get('adminLogin');
        return 'Y';
    }
    return 'N';
  }
}
