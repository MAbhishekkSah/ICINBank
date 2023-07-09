package com.finalProject.simplilearn.ICIN.Bank.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finalProject.simplilearn.ICIN.Bank.entity.Transaction;
import com.finalProject.simplilearn.ICIN.Bank.service.TransactionService;

@RestController
@RequestMapping("/transactions")
@CrossOrigin(origins = "http://localhost:4200")
public class TransactionController {

	@Autowired
	private TransactionService tService;
	
	@PostMapping("/add")
	public ResponseEntity<Object> addTransaction(@RequestBody Transaction t){
		return new ResponseEntity<Object>(tService.saveTransaction(t),HttpStatus.OK);
	}
}
