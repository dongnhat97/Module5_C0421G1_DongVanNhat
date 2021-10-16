package com.example.demo.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity
public class CarType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long carTypeId;
    private String carTypeName;
    @JsonBackReference
    @OneToMany(mappedBy = "carType")
    private List<Car> cars;

    public CarType() {
    }

    public CarType(Long carTypeId, String carTypeName, List<Car> cars) {
        this.carTypeId = carTypeId;
        this.carTypeName = carTypeName;
        this.cars = cars;
    }

    public Long getCarTypeId() {
        return carTypeId;
    }

    public void setCarTypeId(Long carTypeId) {
        this.carTypeId = carTypeId;
    }

    public String getCarTypeName() {
        return carTypeName;
    }

    public void setCarTypeName(String carTypeName) {
        this.carTypeName = carTypeName;
    }

    public List<Car> getCars() {
        return cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }
}
