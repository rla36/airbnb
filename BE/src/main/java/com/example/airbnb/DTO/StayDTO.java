package com.example.airbnb.DTO;

import com.example.airbnb.domain.Amenity;
import com.example.airbnb.domain.Option;
import com.example.airbnb.domain.Stay;
import com.example.airbnb.service.StayService;
import lombok.Getter;

import java.util.List;

@Getter
public class StayDTO {
    private Long id;
    private String imageURL;
    private String location;
    private String category;
    private String title;

    private Option option;
    private List<String> amenities;

    private int pricePerNight;

    private double rating;
    private int reviewCount;

    private double coordinate;

    public StayDTO(Stay stay) {
        this.id = stay.getId();
        this.imageURL = stay.getImageURL();
        this.location = stay.getLocation();
        this.category = stay.getCategory();
        this.title = stay.getTitle();
        this.option = stay.getOption();
        this.amenities = StayService.makeAmenitiesToList(stay);
        this.pricePerNight = stay.getPricePerNight();
        this.rating = stay.getAverageRating();
        this.reviewCount = stay.getReviewCount();
        this.coordinate = stay.getCoordinate();
    }

}
