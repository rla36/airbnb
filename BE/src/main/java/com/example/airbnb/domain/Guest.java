package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class Guest {
    @Id
    private Long id;

    private int adult;
    private int child;
    private int infant;
}
