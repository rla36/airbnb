package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class Review {
    @Id
    private Long id;

    private double rating;
    private String reviewContents;
}
