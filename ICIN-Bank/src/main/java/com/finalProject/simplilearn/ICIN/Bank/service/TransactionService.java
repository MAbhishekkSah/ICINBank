package com.finalProject.simplilearn.ICIN.Bank.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.finalProject.simplilearn.ICIN.Bank.entity.Transaction;
import com.finalProject.simplilearn.ICIN.Bank.repository.TransactionRepo;

@Service
public class TransactionService {
	
	@Autowired
	private TransactionRepo tRepo;
	
	public Transaction saveTransaction(Transaction t)
	{
		return tRepo.save(t);
	}
}
