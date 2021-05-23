package com.example.airbnb.domain;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.util.List;

@Getter
@Setter
public class Theme {
    @Id
    private Long id;
    private String title;

    private List<CloseAttraction> closeAttractions;
    private List<ThemeStayContent> themeStayContents;
}
