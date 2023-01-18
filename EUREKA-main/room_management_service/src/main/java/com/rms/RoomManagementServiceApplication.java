package com.rms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class RoomManagementServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoomManagementServiceApplication.class, args);
	}

}
