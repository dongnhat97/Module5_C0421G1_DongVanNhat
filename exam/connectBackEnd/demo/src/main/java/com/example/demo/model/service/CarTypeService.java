package com.example.demo.model.service;

import com.example.demo.model.entity.CarType;
import com.example.demo.model.repository.CarTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarTypeService implements ICarTypeService {
    @Autowired
    CarTypeRepository carTypeRepository;

    @Override
    public List<CarType> findAll() {
        return carTypeRepository.findAll();
    }
}
