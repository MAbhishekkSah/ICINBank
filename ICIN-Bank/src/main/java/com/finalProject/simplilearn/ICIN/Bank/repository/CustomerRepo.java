package com.finalProject.simplilearn.ICIN.Bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.finalProject.simplilearn.ICIN.Bank.entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Integer> {

}
