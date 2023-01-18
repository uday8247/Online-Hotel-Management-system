package com.room.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class configurat {
	
	@Bean
	public Docket swaggerApiConfig() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.paths(PathSelectors.any())
				.apis(RequestHandlerSelectors.basePackage("com.room"))
				.build()
				.apiInfo(apiInfo());
	}
	private ApiInfo apiInfo() {
		return new ApiInfo(
				"Reservation Management System APIs",
				"Created By NR Techs",
				"1.0.0",
				"Public API",
				new Contact(
						"NR Tech Booster",
						"https://www.youtube.com/watch?v=oJSFdqE7Tpo",
						"restapi.gmail.com"),
						"API Licence Open",
						"https://www.youtube.com/watch?v=oJSFdqE7Tpo");
		
	}

}
