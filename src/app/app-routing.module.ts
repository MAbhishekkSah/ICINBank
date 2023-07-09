import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './CustomerOperations/register/register.component';
import { LoginComponent } from './CustomerOperations/login/login.component';
import { HomeComponent } from './home/home.component';
import { WithdrawComponent } from './CustomerOperations/withdraw/withdraw.component';
import { DepositComponent } from './CustomerOperations/deposit/deposit.component';
import { TransactionHistoryComponent } from './CustomerOperations/transaction-history/transaction-history.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ViewCustomersComponent } from './Admin/view-customers/view-customers.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'home', component:HomeComponent },
  { path:'register', component:RegisterComponent },
  { path:'login', component:LoginComponent },
  { path:'home', component:HomeComponent },
  { path:'withdraw', component:WithdrawComponent },
  { path:'deposit', component:DepositComponent },
  { path:'transactionHistory', component:TransactionHistoryComponent },
  { path:'adminLogin', component:AdminLoginComponent },
  { path:'viewCustomer', component:ViewCustomersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
