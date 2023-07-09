package com.finalProject.simplilearn.ICIN.Bank.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int accountNumber;
	private String name;
	private String emailId;
	private String loginId;
	private String loginPassword;
	private String transactionKey;
	private String dob;
	private String isActive;
	@OneToOne
	@JoinColumn(name="address_id")
	private Address address;
	@OneToOne
	@JoinColumn(name="bank_id")
	private BankDetails bankDetails;
	
	public int getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getLoginId() {
		return loginId;
	}
	public void setLoginId(String loginId) {
		this.loginId = loginId;
	}
	public String getLoginPassword() {
		return loginPassword;
	}
	public void setLoginPassword(String loginPassword) {
		this.loginPassword = loginPassword;
	}
	public String getTransactionKey() {
		return transactionKey;
	}
	public void setTransactionKey(String transactionKey) {
		this.transactionKey = transactionKey;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String isActive() {
		return isActive;
	}
	public void setActive(String isActive) {
		this.isActive = isActive;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public BankDetails getBankDetails() {
		return bankDetails;
	}
	public void setBankDetails(BankDetails bankDetails) {
		this.bankDetails = bankDetails;
	}
	public Customer(String name, String emailId, String loginId, String loginPassword,
			String transactionKey, String dob, String isActive, Address address, BankDetails bankDetails) {
		super();
		this.name = name;
		this.emailId = emailId;
		this.loginId = loginId;
		this.loginPassword = loginPassword;
		this.transactionKey = transactionKey;
		this.dob = dob;
		this.isActive = isActive;
		this.address = address;
		this.bankDetails = bankDetails;
	}
	@Override
	public String toString() {
		return "Customer [accountNumber=" + accountNumber + ", name=" + name + ", emailId=" + emailId + ", loginId="
				+ loginId + ", loginPassword=" + loginPassword + ", transactionKey=" + transactionKey + ", dob=" + dob
				+ ", isActive=" + isActive + ", address=" + address + ", bankDetails=" + bankDetails + "]";
	}
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
