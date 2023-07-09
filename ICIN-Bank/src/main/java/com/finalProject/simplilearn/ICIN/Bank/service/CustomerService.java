package com.finalProject.simplilearn.ICIN.Bank.service;

import java.util.List;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.finalProject.simplilearn.ICIN.Bank.entity.BankDetails;
import com.finalProject.simplilearn.ICIN.Bank.entity.Customer;
import com.finalProject.simplilearn.ICIN.Bank.entity.Transaction;
import com.finalProject.simplilearn.ICIN.Bank.repository.AddressRepo;
import com.finalProject.simplilearn.ICIN.Bank.repository.BankDetailsRepo;
import com.finalProject.simplilearn.ICIN.Bank.repository.CustomerRepo;
import com.finalProject.simplilearn.ICIN.Bank.repository.TransactionRepo;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepo cRepo;
	@Autowired
	private TransactionRepo tRepo;
	@Autowired
	private AddressRepo aRepo;
	@Autowired
	private BankDetailsRepo bdRepo;
	
	public Customer addCustomer(Customer customer)
	{
		aRepo.save(customer.getAddress());
		bdRepo.save(customer.getBankDetails());
		return cRepo.save(customer);
	}
	public List<Customer> getAllCustomer(){
		return cRepo.findAll();
	}
	public Customer searchCustomerByAccNo(int id) {
		if(cRepo.findById(id).isPresent())
		{
			return cRepo.findById(id).get();
		}
		return null;
	}
	public BankDetails getBankDetailsByAccNo(int id)
	{
		if(cRepo.findById(id).isPresent())
		{
			Customer customer = cRepo.findById(id).get();
			return customer.getBankDetails();
		}
		return null;
	}
	public Customer updateBalance(int accNo, double balanceAmount) {
		if(cRepo.findById(accNo).isPresent())
		{
			Customer cust = cRepo.findById(accNo).get();
			BankDetails bd = cust.getBankDetails();
			bd.setBalance(balanceAmount);
			cust.setBankDetails(bd);
			return cust;
		}
		return null;
	}
	public Customer updateCustomerDetails(int accNo,Customer customer) {
		if(cRepo.findById(accNo).isPresent())
		{
			Customer cust = cRepo.findById(accNo).get();
			cust.setActive(customer.isActive());
			cust.setAddress(customer.getAddress());
			cust.setBankDetails(customer.getBankDetails());
			cust.setDob(customer.getDob());
			cust.setEmailId(customer.getEmailId());
			cust.setLoginId(customer.getLoginId());
			cust.setLoginPassword(customer.getLoginPassword());
			cust.setName(customer.getName());
			cust.setTransactionKey(customer.getTransactionKey());
			bdRepo.save(customer.getBankDetails());
			return cRepo.save(cust);
		}
		return customer;
	}
	public boolean deleteCustmerById(int id)
	{
		if(cRepo.findById(id).isPresent())
		{
			cRepo.deleteById(id);
			return true;
		}
		return false;
	}
	public List<Transaction> getTransactionDetails(int accNo) {
		if(cRepo.findById(accNo).isPresent())
		{
			List<Transaction> transactions = tRepo.findAll();
			List<Transaction> tList = new ArrayList<Transaction>();
			for(int i = 0; i<transactions.size(); i++)
			{
				if(transactions.get(i).getAccountNo() == accNo)
				{
					tList.add(transactions.get(i));
				}
			}
			return tList;
		}
		return null;
	}
	
}
