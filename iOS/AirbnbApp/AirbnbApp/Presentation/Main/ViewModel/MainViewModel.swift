//
//  MainViewModel.swift
//  AirbnbApp
//
//  Created by 김지선 on 2021/05/20.
//

import Foundation

class MainViewModel {
    private var places = [Place]()
    private var trips = [Trip]()
    
    func getHeroImage() -> String {
        return Dummy.heroURL
    }
    
    func getPlaceItems() -> [Place] {
        return [Dummy.place, Dummy.place, Dummy.place, Dummy.place, Dummy.place, Dummy.place]
    }
    
    func getTripItems() -> [Trip] {
        return [Dummy.trip, Dummy.trip, Dummy.trip, Dummy.trip]
    }
}
