package com.sapient.training.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Employee {
	private Integer empno;
	private String name;
	private String job;
	private Double salary;
	private Integer deptno;
}
