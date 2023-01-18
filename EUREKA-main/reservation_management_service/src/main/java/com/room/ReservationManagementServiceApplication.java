package com.room;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class ReservationManagementServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReservationManagementServiceApplication.class, args);
	}

}
