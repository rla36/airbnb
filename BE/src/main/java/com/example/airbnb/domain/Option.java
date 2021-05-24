package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class Option {
    @Id
    private Long id;

    private int maxGuestCount;
    private String roomType;
    private int bedCount;
    private int bathroomCount;
}
