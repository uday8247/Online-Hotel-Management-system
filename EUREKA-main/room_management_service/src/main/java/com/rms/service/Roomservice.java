package com.rms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rms.model.Room;
import com.rms.repository.Roomrepository;

@Service
public class Roomservice {
	
	@Autowired
	private Roomrepository repo;
	
	public Roomservice() {
		
	}

	public Roomservice(Roomrepository repo) {
		super();
		this.repo = repo;
	}
	
	public void saveMyRoom(Room Room) {
		repo.save(Room);
	}
	
	public Iterable<Room> showAllrooms(){
		return repo.findAll();
	}
	
	public Iterable<Room> deleteByRoomno(String roomno){
		repo.deleteByRoomno(roomno);
		return repo.findAll();
	}
	
	public Room findByRoomno(String roomno) {
		return repo.findByRoomno(roomno);
	}
	public String updateRoom(Room room)
	{
		repo.save(room);
		return "Room details has been successfully updated";
	}

}
