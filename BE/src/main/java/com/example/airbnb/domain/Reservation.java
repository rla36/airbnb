package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;

@Getter
public class Reservation {
    @Id
    private Long id;

    private LocalDate checkInDate;
    private LocalDate checkOutDate;

    private Guest guest;
}

