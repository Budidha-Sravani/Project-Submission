package com.axis.Feedback;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.axis.Feedback.entities.Feedback;
import com.axis.Feedback.repositories.FeedbackRepository;

import jakarta.persistence.EntityManager;

@SpringBootTest
class FeedbackApplicationTests {
	
	@Autowired
	EntityManager entityManager;
	
	@Autowired
	FeedbackRepository feedbackRepo;
	
//	@Autowired
	
	@Test
	void shouldFindByUser() {
		Feedback testFeedback = new Feedback("Dummy Test", 5, "dummy");
		entityManager.persist(testFeedback);
		entityManager.flush();
		Feedback cmp = feedbackRepo.findByUser(testFeedback.getUser());
		assertEquals(cmp.getUser(), testFeedback.getUser());
	}
}
