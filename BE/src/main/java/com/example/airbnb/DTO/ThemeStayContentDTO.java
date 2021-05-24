package com.example.airbnb.DTO;

import com.example.airbnb.domain.Theme;
import com.example.airbnb.domain.ThemeStayContent;
import lombok.Getter;

import java.util.List;

@Getter
public class ThemeStayContentDTO {
    private String title;
    private List<ThemeStayContent> themeStayContents;

    public ThemeStayContentDTO(Theme theme) {
        this.title = theme.getTitle();
        this.themeStayContents = theme.getThemeStayContents();
    }
}
