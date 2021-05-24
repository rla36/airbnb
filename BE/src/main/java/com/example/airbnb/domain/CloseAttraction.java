package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class CloseAttraction {
    @Id
    private Long id;

    private String imageURL;
    private String location;
    private String type;
    private int time;
}
