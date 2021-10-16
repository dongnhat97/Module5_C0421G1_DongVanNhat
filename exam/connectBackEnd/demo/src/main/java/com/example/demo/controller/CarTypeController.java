package com.example.demo.controller;

import com.example.demo.model.entity.CarType;
import com.example.demo.model.service.ICarTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("carType/api")
public class CarTypeController {
    @Autowired
    ICarTypeService iCarTypeService;
    @GetMapping
    public ResponseEntity<List<CarType>> getCarTypeList() {
        List<CarType> carTypes = iCarTypeService.findAll();
        if (carTypes.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carTypes,HttpStatus.OK);
    }
}
