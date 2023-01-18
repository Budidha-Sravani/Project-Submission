package com.axis.Repository;

import org.springframework.data.jpa.repository.JpaRepository;


import com.axis.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Integer> {

}
