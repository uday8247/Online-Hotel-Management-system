package com.room.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.room.model.reservation;
import com.room.repository.reservationRepository;


@Service
public class reservationService {
	
	@Autowired
	private reservationRepository repo;
	
	public reservationService() {
		
	}

	public reservationService(reservationRepository repo) {
		super();
		this.repo = repo;
	}
	
	public void saveMyRoom(reservation Reservation) {
		repo.save(Reservation);
	}
	
	public Iterable<reservation> showAllrooms(){
		return repo.findAll();
	}
	
	public Iterable<reservation> deleteByRoomno(String roomno){
		repo.deleteByRoomno(roomno);
		return repo.findAll();
	}
	
	public reservation findByRoomno(String roomno) {
		return repo.findByRoomno(roomno);
	}
	
	public String updateRoom(reservation Reservation)
	{
		repo.save(Reservation);
		return "Room details has been successfully updated";
	}


}
