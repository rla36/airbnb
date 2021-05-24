package com.example.airbnb.repository;

import com.example.airbnb.domain.Theme;
import org.springframework.data.repository.CrudRepository;

public interface ThemeRepository extends CrudRepository<Theme, Long> {
}
