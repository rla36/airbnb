package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
public class Stay {
    @Id
    private Long id;

    private String imageURL;
    private String location;
    private String category;
    private String title;
    private String description;

    private Option option;
    private List<Amenity> amenities;

    private List<Review> reviews;
    private double coordinate;

    private Long hostId; //TODO N:1
    private List<Reservation> reservations; //TODO Stay와 User의 M:N관계 연결.
}
