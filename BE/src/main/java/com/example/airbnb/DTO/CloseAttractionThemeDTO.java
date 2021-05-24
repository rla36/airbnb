package com.example.airbnb.DTO;

import com.example.airbnb.domain.CloseAttraction;
import com.example.airbnb.domain.Theme;
import lombok.Getter;

import java.util.List;

@Getter
public class CloseAttractionThemeDTO {
    private String title;
    private List<CloseAttraction> closeAttractions;

    public CloseAttractionThemeDTO(Theme theme) {
        this.title = theme.getTitle();
        this.closeAttractions = theme.getCloseAttractions();
    }
}
