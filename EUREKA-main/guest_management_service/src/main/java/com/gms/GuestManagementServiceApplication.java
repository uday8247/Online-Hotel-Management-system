package com.gms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class GuestManagementServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuestManagementServiceApplication.class, args);
	}

}
