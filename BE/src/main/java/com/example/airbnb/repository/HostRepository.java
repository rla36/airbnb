package com.example.airbnb.repository;

import com.example.airbnb.domain.Host;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface HostRepository extends CrudRepository<Host, Long> {

    @Query("select id, name, image_url from host where host.id=:id")
    Optional<Host> findById(@Param("id") Long id);
}
