package com.axis.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.UserModel;
import com.axis.service.UserService;





@CrossOrigin
@RequestMapping("/Survey/user")
@RestController

public class Controller {
	@Autowired
	UserService UserModel;
	
	
@GetMapping("/v1")
public String v1() {
	return "v1";
}

//add  a user
@PostMapping("/save")
public ResponseEntity<UserModel> saveUserModelDetail(@RequestBody UserModel user)
{
	UserModel user1=UserModel.addUser(user);
	return new ResponseEntity <UserModel> (user1,HttpStatus.OK);
}

//Get by Id
@GetMapping("/getId/{userId}")
public ResponseEntity <UserModel> getUser(@PathVariable Integer userId){
   UserModel user1=UserModel.getUserById(userId) ;
   return new ResponseEntity <UserModel> (user1,HttpStatus.OK);

}

//Get all users
@GetMapping("/get")
public  List<UserModel> getAllUsers() {
	return UserModel.getAll();
}
}





