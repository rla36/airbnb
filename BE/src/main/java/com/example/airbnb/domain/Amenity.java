package com.example.airbnb.domain;

import lombok.Getter;

@Getter
public class Amenity {
    private enum AmenityType {
        KITCHEN("주방"),
        WIFI("무선인터넷"),
        AIR_CONDITIONING("에어컨"),
        HAIR_DRIER("헤어 드라이기");

        private String amenityType;

        AmenityType(String amenityType) {
            this.amenityType = amenityType;
        }
    }

    private AmenityType amenityType;

    @Override
    public String toString() {
        return amenityType.toString();
    }


}
