package com.example.airbnb.DTO;

import com.example.airbnb.domain.Stay;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Getter
public class SearchResultDTO {
    private int stayCount;
    private List<StayDTO> stays;

    public SearchResultDTO(List<Stay> stayList) {
        this.stayCount = stayList.size();
        this.stays = addStayDTO(stayList);
    }

    @JsonIgnore
    public List<StayDTO> addStayDTO(List<Stay> stayList) {
        List<StayDTO> stayDTOS = new ArrayList<>();
        for (Stay stay : stayList) {
            stayDTOS.add(new StayDTO(stay));
        }
        return stayDTOS;
    }
}
