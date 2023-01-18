package com.ems.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "employeedetails")
public class Employee {

	private long id;
	private String employeename;
	private String age;
	private String salary;
	private String designation;
	@Id
	private String emailid;
	
	public Employee() {
		
	}

	public Employee(long id, String employeename, String age, String salary, String designation, String emailid) {
		super();
		this.id = id;
		this.employeename = employeename;
		this.age = age;
		this.salary = salary;
		this.designation = designation;
		this.emailid = emailid;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getEmployeename() {
		return employeename;
	}

	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getSalary() {
		return salary;
	}

	public void setSalary(String salary) {
		this.salary = salary;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", employeename=" + employeename + ", age=" + age + ", salary=" + salary
				+ ", designation=" + designation + ", emailid=" + emailid + "]";
	}
	
}