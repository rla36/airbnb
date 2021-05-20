//
//  Dummy.swift
//  AirbnbApp
//
//  Created by 김지선 on 2021/05/20.
//

import Foundation

struct Dummy {
    static let heroURL =
    "https://github.com/codesqurd-master-DD/fe-w12-airbnb/blob/main/dist/img/banner.jpg?raw=true"
    
    static let place = Place(location: "서울", imageURL:  "https://github.com/codesqurd-master-DD/fe-w12-airbnb/blob/main/dist/img/loaction_1.jpg?raw=true", type: "도보", time: 30)

    static let trip = Trip(imageURL: "https://github.com/codesqurd-master-DD/fe-w12-airbnb/blob/main/dist/img/theme_1.jpg?raw=true", themeTitle: "자연생활을 만끽할 수 있는 장소")
}
