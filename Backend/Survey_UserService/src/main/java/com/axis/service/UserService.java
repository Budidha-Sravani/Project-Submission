package com.axis.service;

import java.util.List;

import com.axis.model.UserModel;

public interface UserService {
	public UserModel addUser(UserModel user);
	public UserModel getUserById(Integer id);
	public List<UserModel> getAll();

}
