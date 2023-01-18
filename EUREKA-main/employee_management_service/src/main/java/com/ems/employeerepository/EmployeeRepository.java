package com.ems.employeerepository;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.ems.model.Employee;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee, String> {

}

