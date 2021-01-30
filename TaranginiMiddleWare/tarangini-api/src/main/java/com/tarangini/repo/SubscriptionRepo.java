package com.tarangini.repo;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.tarangini.entity.Subscription;

@Repository
public interface SubscriptionRepo extends JpaRepository<Subscription, Long>{
	
	@Modifying
	@Query("update Subscription s set s.dateValidTo=:toDate where s.subscriptionId=:id")
	int changeSubscriptionDateValidTo(LocalDate toDate,Long id);	
}
