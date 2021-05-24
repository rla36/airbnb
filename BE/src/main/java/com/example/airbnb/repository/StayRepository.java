package com.example.airbnb.repository;

import com.example.airbnb.domain.Stay;
import org.springframework.data.repository.CrudRepository;

public interface StayRepository extends CrudRepository<Stay, Long> {
}
