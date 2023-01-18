package com.axis.exception;

public class UserException extends RuntimeException {
	String msg;

	public UserException(String msg) {
		super();
		this.msg = msg;
	}

	public String getMsg() {
		// TODO Auto-generated method stub
		return msg;
	}

}
