package com.rms.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="RoomDetails")
public class Room {
	
	@Id
	private String roomno;
	private String roomtype;
	private String price;
	private String status;
	
	public Room() {
		
	}
	public Room(String roomno, String roomtype, String price, String status) {
		super();
		
		this.roomno = roomno;
		this.roomtype = roomtype;
		this.price = price;
		this.status = status;
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
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Room [roomno=" + roomno + ", roomtype=" + roomtype + ",price=" + price + ", status=" + status + "]";
	}
	

}
