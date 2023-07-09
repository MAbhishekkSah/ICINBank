package com.finalProject.simplilearn.ICIN.Bank.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.finalProject.simplilearn.ICIN.Bank.entity.Customer;
import com.finalProject.simplilearn.ICIN.Bank.entity.Transaction;
import com.finalProject.simplilearn.ICIN.Bank.service.CustomerService;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:4200")
public class CustomerController {

	@Autowired
	private CustomerService cService;
	
	@GetMapping("/getAll")
	public List<Customer> getAllCustomers(){
		return cService.getAllCustomer();
	}
	
	@GetMapping("/getCustomerByAccNo/{accNo}")
	public ResponseEntity<Object> customerByAccNo(@PathVariable int accNo){
		if(cService.searchCustomerByAccNo(accNo)!=null)
		{
			return new ResponseEntity<Object>(cService.searchCustomerByAccNo(accNo),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Customer Found with this Account No. !",HttpStatus.NOT_FOUND);
	}
	@GetMapping("/getBankDetails/{accNo}")
	public ResponseEntity<Object> bankDetailsByAccNo(@PathVariable int accNo){
		if(cService.getBankDetailsByAccNo(accNo)!=null)
		{
			return new ResponseEntity<Object>(cService.getBankDetailsByAccNo(accNo),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Account Found!",HttpStatus.NOT_FOUND);
	}
	@GetMapping("/getTransactionDetails/{accNo}")
	public List<Transaction> transctionDetailsByAccNo(@PathVariable int accNo){
		if(cService.getTransactionDetails(accNo)!=null)
		{
			return cService.getTransactionDetails(accNo);
		}
		return null;
	}
	@PostMapping("/addCustomer")
	public ResponseEntity<Object> addCustomers(@RequestBody Customer cust)
	{
		return new ResponseEntity<Object>(cService.addCustomer(cust),HttpStatus.OK);
	}
	@PutMapping("/update/{accNo}")
	public ResponseEntity<Object> updatedetails(@PathVariable int accNo,@RequestBody Customer cust)
	{
		if(cService.searchCustomerByAccNo(accNo)!=null)
		{
			System.out.print("Inside update "+cust);
			return new ResponseEntity<Object>(cService.updateCustomerDetails(accNo, cust),HttpStatus.OK);
		}
		return new ResponseEntity<Object>("No Customer to update!",HttpStatus.NOT_FOUND);
	}
	@DeleteMapping("delete/{id}")
	public ResponseEntity<String> deleteCustomer(@PathVariable int accNo)
	{
		if(cService.searchCustomerByAccNo(accNo)!=null)
		{
			boolean isDeleted = cService.deleteCustmerById(accNo);
			return new ResponseEntity<String>("Deleted Successfully!",HttpStatus.OK);
		}
		return new ResponseEntity<String>("No Customer to delete!",HttpStatus.NOT_FOUND);
	}
}
