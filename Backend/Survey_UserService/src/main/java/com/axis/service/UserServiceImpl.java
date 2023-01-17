package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.Repository.UserRepository;
import com.axis.exception.IDNotFoundException;
import com.axis.exception.UserException;
import com.axis.model.UserModel;
import com.axis.util.AppConstant;


@Service
public class UserServiceImpl implements UserService{
	@Autowired
	UserRepository userRepository;
	
	@Override
	public UserModel addUser(UserModel user) {
		if(user.getFirstName()=="") {
			throw new UserException(AppConstant.USER_ERR);
		}
		else if(user.getLastName()=="") {
			throw new UserException(AppConstant.USER_ERR);
		}
		else if(user.getEmail()=="") {
			throw new UserException(AppConstant.EMAIL_ERR);
		}
		return userRepository.save(user);
	}

	@Override
	public UserModel getUserById(Integer id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id).orElseThrow(()-> new IDNotFoundException(AppConstant.INVALID_MSG));
		
	}

	@Override
	public List<UserModel> getAll() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}
	

}
