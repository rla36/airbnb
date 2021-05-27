package com.example.airbnb.domain;

import lombok.Getter;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
public class Host {
    @Id
    private Long id;

    private String name;
    private String imageURL;

}
