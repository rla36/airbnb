package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class ThemeStayContent {
    @Id
    private Long id;

    private String title;
    private String imageURL;
}
