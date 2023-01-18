package com.sapient.training.app;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.sapient.training.model.Employee;

@SpringBootApplication(scanBasePackages = "com.sapient.training")
@EnableDiscoveryClient
public class EmployeeConsumerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeConsumerApplication.class, args);
	}
	
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}

@RestController
@RequestMapping("/api")
class EmployeeConsumerController{
	@Autowired
	RestTemplate restTemplate;
	
	@GetMapping("/allemp")
	public ResponseEntity<List<Employee>> getEmployees()  {

		String baseUrl = "http://localhost:8810/api/getall";
		
		
		try{
		List<Employee> employeeList=restTemplate.exchange(baseUrl,
				HttpMethod.GET, getHeaders(),ArrayList.class).getBody();
		System.out.println("getall emp is called in consumer");
		return new ResponseEntity<>(employeeList,HttpStatus.OK);
		}catch (Exception ex) {
			return new ResponseEntity<>(null,HttpStatus.BAD_REQUEST);
		}
		
	}

	private static HttpEntity<?> getHeaders() throws IOException {
		HttpHeaders headers = new HttpHeaders();
		headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);
		return new HttpEntity<>(headers);
	}
}
