package com.room.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Room")
public class reservation {
	
	private String nameoftheguest;
	@Id
	private String roomno;
	private String roomtype;
	private String checkin;
	private String checkout;
	private String status;
	
	public reservation() {}
	

	public reservation(String nameoftheguest,String roomno, String roomtype, String checkin, String checkout, String status) {
		super();
		this.nameoftheguest = nameoftheguest;
		this.roomno = roomno;
		this.roomtype = roomtype;
		this.checkin = checkin;
		this.checkout = checkout;
		this.status = status;
	}
	
	public String getNameoftheguest() {
		return nameoftheguest;
	}

	public void setNameoftheguest(String nameoftheguest) {
		this.nameoftheguest = nameoftheguest;
	}

	public String getRoomno() {
		return roomno;
	}

	public void setRoomno(String roomno) {
		this.roomno = roomno;
	}

	public String getRoomtype() {
		return roomtype;
	}

	public void setRoomtype(String roomtype) {
		this.roomtype = roomtype;
	}

	public String getCheckin() {
		return checkin;
	}

	public void setCheckin(String checkin) {
		this.checkin = checkin;
	}

	public String getCheckout() {
		return checkout;
	}

	public void setCheckout(String checkout) {
		this.checkout = checkout;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}

	