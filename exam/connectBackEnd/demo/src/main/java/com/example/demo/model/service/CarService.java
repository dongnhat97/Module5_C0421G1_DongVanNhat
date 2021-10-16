package com.example.demo.model.service;

import com.example.demo.model.entity.Car;
import com.example.demo.model.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService implements ICarService {
    @Autowired
    private CarRepository carRepository;

    @Override
    public List<Car> findAll() {
        return carRepository.findAll();
    }

    @Override
    public void delete(Long id) {
        carRepository.deleteById(id);
    }

    @Override
    public void save(Car car) {
          carRepository.save(car);
    }

    @Override
    public Car findById(Long id) {
        return carRepository.findById(id).get();
    }


}
