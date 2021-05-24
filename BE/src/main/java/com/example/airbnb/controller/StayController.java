package com.example.airbnb.controller;


import com.example.airbnb.repository.StayRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class StayController {

    private StayRepository stayRepository;

    public StayController(StayRepository stayRepository) {
        this.stayRepository = stayRepository;
    }
}
