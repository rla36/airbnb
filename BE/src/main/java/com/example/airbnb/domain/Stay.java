package com.example.airbnb.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    private int pricePerNight;
    private double coordinate;

    private Long hostId; //TODO N:1
    private List<Reservation> reservations; //TODO Stay와 User의 M:N관계 연결.


    public int getReviewCount() {
        return reviews.size();
    }

    public double getAverageRating() {
        double sum = reviews.stream()
            .mapToDouble(Review::getRating)
                .sum();
        return sum/getReviewCount();
    }

}
