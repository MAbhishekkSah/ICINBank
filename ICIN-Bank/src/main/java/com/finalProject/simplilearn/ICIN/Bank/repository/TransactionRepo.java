package com.finalProject.simplilearn.ICIN.Bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finalProject.simplilearn.ICIN.Bank.entity.Transaction;

public interface TransactionRepo extends JpaRepository<Transaction, Integer> {

}
