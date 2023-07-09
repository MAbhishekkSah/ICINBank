import { Address } from "./address"
import { BankDetails } from "./bank-details"

export class Customer {
    accountNumber!:number;
    name!:string;
    emailId!:string;
    loginId!:string;
    loginPassword!:string;
    transactionKey!:string;
    dob!:string;
    isActive!:string;
    address!:Address;
    bankDetails!:BankDetails;
}
