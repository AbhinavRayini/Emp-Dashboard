package com.hitachi.springjpademo.repository;

import com.hitachi.springjpademo.model.Employee;

// import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// import java.util.List;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // List<Employee> findByLastNameOrderByLastNameDesc(String name);

    // List<Employee> findByLastNameIsNot(String name);

    // List<Employee> findByLastNameIsNot(String name);

    // List<Employee> findByLastNameOrderByLastNameDesc(String name);
}