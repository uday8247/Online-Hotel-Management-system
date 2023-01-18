package com.room.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.room.model.reservation;
import com.room.service.reservationService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/booking")
public class restcontroller {
	
	@Autowired
	private reservationService service;
	
	@PostMapping("/rooms")
	@Transactional
	public String registerRoom(@RequestBody reservation Reservation) {
		service.saveMyRoom(Reservation);
		return "Hello "+Reservation.getRoomno()+ " room has Allocated";
		
	}
	
	@GetMapping("/rooms")
	public Iterable<reservation> showAllrooms(){
		return service.showAllrooms();
	}
	
	@DeleteMapping("/rooms/{roomno}")
	public Iterable<reservation> deleteRoom(@PathVariable String roomno){
		return service.deleteByRoomno(roomno);
	}
	
	@GetMapping("/rooms/{roomno}")
	public reservation searchRoomno(@PathVariable String roomno) {
		return service.findByRoomno(roomno);
	}
	
	@PutMapping("/rooms")
	public String updateroom(@RequestBody reservation Reservation) {
		return service.updateRoom(Reservation);
	}


}
