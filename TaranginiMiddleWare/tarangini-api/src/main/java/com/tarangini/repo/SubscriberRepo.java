package com.tarangini.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tarangini.entity.Subscriber;

@Repository
public interface SubscriberRepo extends JpaRepository<Subscriber, Long>{
	
	Subscriber findByMobileNumber(String mobileNumber);
	
}
