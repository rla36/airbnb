package com.example.airbnb.domain;

import lombok.Getter;

import java.util.List;

@Getter
public class Host {

    private Long id;
    private String name;
    private String imageURL;
    private List<Stay> Stays;
}
