package com.room.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.CrudRepository;

import com.room.model.reservation;


public interface reservationRepository extends CrudRepository<reservation, String>, MongoRepository<reservation, String>{

	public Iterable<reservation> deleteByRoomno(String roomno);
	public reservation findByRoomno(String roomno);

}