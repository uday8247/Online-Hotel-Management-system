package com.rms.controller;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rms.model.Room;
import com.rms.service.Roomservice;

@CrossOrigin
@RestController 
@RequestMapping("/api/room")
public class Restcontroller {
	
	@Autowired
	private Roomservice service;
	
	@PostMapping("/rooms")
	//@Transactional
	public String registerRoom(@RequestBody Room room) {
		service.saveMyRoom(room);
		return "Hello "+room.getRoomno()+ " room has Allocated";
		
	}
	
	@GetMapping("/rooms")
	public Iterable<Room> showAllrooms(){
		return service.showAllrooms();
	}
	
	@DeleteMapping("/rooms/{roomno}")
	public Iterable<Room> deleteRoom(@PathVariable String roomno){
		return service.deleteByRoomno(roomno);
	}
	
	@GetMapping("/rooms/{roomno}")
	public Room searchRoomno(@PathVariable String roomno) {
		return service.findByRoomno(roomno);
	}
	@PutMapping("/rooms")
	public String updateroom(@RequestBody Room room) {
		return service.updateRoom(room);
	}

}
