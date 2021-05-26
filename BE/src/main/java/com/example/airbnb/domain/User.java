package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
public class User {
    @Id
    private Long id;
    private String name;

    private List<Wish> wishList;
}
