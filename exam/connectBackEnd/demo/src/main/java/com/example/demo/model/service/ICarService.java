package com.example.demo.model.service;

import com.example.demo.model.entity.Car;

import java.util.List;
import java.util.Optional;

public interface ICarService {
    List<Car> findAll();
    void delete (Long id);
    void save(Car car);
    Car findById(Long id);

}
