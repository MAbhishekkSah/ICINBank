import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './CustomerOperations/login/login.component';
import { RegisterComponent } from './CustomerOperations/register/register.component';
import { WithdrawComponent } from './CustomerOperations/withdraw/withdraw.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { DepositComponent } from './CustomerOperations/deposit/deposit.component';
import { TransactionHistoryComponent } from './CustomerOperations/transaction-history/transaction-history.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { ViewCustomersComponent } from './Admin/view-customers/view-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WithdrawComponent,
    HomeComponent,
    DepositComponent,
    TransactionHistoryComponent,
    AdminLoginComponent,
    ViewCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
