package com.rms.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;
import com.rms.model.Room;

public interface Roomrepository extends CrudRepository<Room, String>, MongoRepository<Room, String>{

	public Iterable<Room> deleteByRoomno(String roomno);
	public Room findByRoomno(String roomno);

}
