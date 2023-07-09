package com.finalProject.simplilearn.ICIN.Bank.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BankDetails {

	@Id
	@Column(name="bank_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int bankId;
	private String bankName;
	private String ifscCode;
	private String branchName;
	private String branchCode;
	private double balance;
	
	public int getBankId() {
		return bankId;
	}
	public void setBankId(int bankId) {
		this.bankId = bankId;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getIfscCode() {
		return ifscCode;
	}
	public void setIfscCode(String ifscCode) {
		this.ifscCode = ifscCode;
	}
	public String getBranchName() {
		return branchName;
	}
	public void setBranchName(String branchName) {
		this.branchName = branchName;
	}
	public String getBranchCode() {
		return branchCode;
	}
	public void setBranchCode(String branchCode) {
		this.branchCode = branchCode;
	}
	public double getBalance() {
		return balance;
	}
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public BankDetails(String bankName, String ifscCode, String branchName, String branchCode, double balance) {
		super();
		this.bankName = bankName;
		this.ifscCode = ifscCode;
		this.branchName = branchName;
		this.branchCode = branchCode;
		this.balance = balance;
	}
	public BankDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "BankDetails [bankId=" + bankId + ", bankName=" + bankName + ", ifscCode=" + ifscCode + ", branchName="
				+ branchName + ", branchCode=" + branchCode + ", balance=" + balance + "]";
	} 
	
}
