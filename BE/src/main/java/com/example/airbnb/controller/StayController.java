package com.example.airbnb.controller;

import com.example.airbnb.DTO.DetailStayDTO;
import com.example.airbnb.DTO.SearchResultDTO;
import com.example.airbnb.domain.Host;
import com.example.airbnb.domain.Stay;
import com.example.airbnb.repository.StayRepository;
import com.example.airbnb.service.StayService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/stay")
public class StayController {

    private StayService stayService;
    private StayRepository stayRepository;

    public StayController(StayService stayService, StayRepository stayRepository) {
        this.stayService = stayService;
        this.stayRepository = stayRepository;
    }

    @GetMapping("/search")
    public SearchResultDTO tempSearchResults() {
        return new SearchResultDTO(stayService.findAllStays());
    }

    @GetMapping("/search/checkIn={checkIn}&checkOut={checkOut}")
    public SearchResultDTO showSearchResults(@PathVariable String checkIn, @PathVariable String checkOut) {
        LocalDate checkInDate = LocalDate.parse(checkIn, DateTimeFormatter.BASIC_ISO_DATE);
        LocalDate checkOutDate = LocalDate.parse(checkOut);
        List<Stay> testStay = stayRepository.findAllByCheckInDate(checkInDate, checkOutDate).orElseThrow();
        return new SearchResultDTO(testStay);
    }

    @GetMapping("/search/{stayId}")
    public DetailStayDTO showStayDetails(@PathVariable Long stayId) {
        Stay stay = stayService.findStayById(stayId);
        Host host = stayService.findHostFromStay(stay);
        return new DetailStayDTO(stay, host);
    }

}
