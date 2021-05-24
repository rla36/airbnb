package com.example.airbnb.controller;

import com.example.airbnb.DTO.CloseAttractionThemeDTO;
import com.example.airbnb.DTO.ThemeStayContentDTO;
import com.example.airbnb.domain.Theme;
import com.example.airbnb.repository.ThemeRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HomeController {

    private ThemeRepository themeRepository;

    public HomeController(ThemeRepository themeRepository) {
        this.themeRepository = themeRepository;
    }

    @GetMapping("/closeAttractions")
    public CloseAttractionThemeDTO showCloseAttractions() {
        Theme theme = themeRepository.findById(1L).orElseThrow();
        return new CloseAttractionThemeDTO(theme);
    }

    @GetMapping("/themeStayContent")
    public ThemeStayContentDTO showThemeStayContent() {
        Theme theme = themeRepository.findById(2L).orElseThrow();
        return new ThemeStayContentDTO(theme);
    }


}
