package com.example.airbnb.service;

import com.example.airbnb.domain.Amenity;
import com.example.airbnb.domain.Host;
import com.example.airbnb.domain.Stay;
import com.example.airbnb.repository.HostRepository;
import com.example.airbnb.repository.StayRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StayService {

    private StayRepository stayRepository;
    private HostRepository hostRepository;

    public StayService(StayRepository stayRepository, HostRepository hostRepository) {
        this.stayRepository = stayRepository;
        this.hostRepository = hostRepository;
    }

    public static List<String> makeAmenitiesToList(Stay stay) {
        return stay.getAmenities().stream()
                .map(Amenity::toString)
                .collect(Collectors.toList());
    }

    public Host findHostFromStay(Stay stay) {
        Long hostId = stay.getHostId();
        return hostRepository.findById(hostId).orElseThrow();
    }

    public Stay findStayById(Long stayId) {
        return stayRepository.findById(stayId).orElseThrow();
    }

    public List<Stay> findAllStays() {
        return (List)stayRepository.findAll();
    }
}
