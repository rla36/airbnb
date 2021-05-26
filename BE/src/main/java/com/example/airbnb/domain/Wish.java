package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

@Getter
public class Wish {
    @Id
    private Long id;

    private Long stayId;
}
