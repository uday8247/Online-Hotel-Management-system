package com.sapient.training.app;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sapient.training.model.Employee;

@SpringBootApplication(scanBasePackages = "com.sapient.training")
@EnableDiscoveryClient
public class EmployeeProducerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeProducerApplication.class, args);
	}

}

/*@RestController
@RequestMapping("/api")
class EmployeeProducerController{
	@GetMapping("/getall")
	public ResponseEntity<List<Employee>> getAllEmployees(){
		List<Employee> employeeList=new ArrayList<>();
		employeeList.add(new Employee(1001,"Smith","Manager",5690.0,10));
		employeeList.add(new Employee(1002,"Jones","Developer",4690.0,10));
		return new ResponseEntity<>(employeeList,HttpStatus.OK);
	}
}
*/

