package com.example.demo.dto;

import com.example.demo.model.entity.CarType;

public class CarDto {
    private Long carId;
    private String garage;
    private String licensePlates;
    private String startAddress;
    private String endAddress;
    private String phone;
    private String email;
    private String startHour;
    private CarType carType;

    public CarDto() {
    }

    public CarDto(Long carId, String garage, String licensePlates, String startAddress, String endAddress, String phone, String email, String startHour, CarType carType) {
        this.carId = carId;
        this.garage = garage;
        this.licensePlates = licensePlates;
        this.startAddress = startAddress;
        this.endAddress = endAddress;
        this.phone = phone;
        this.email = email;
        this.startHour = startHour;
        this.carType = carType;
    }

    public Long getCarId() {
        return carId;
    }

    public void setCarId(Long carId) {
        this.carId = carId;
    }

    public String getGarage() {
        return garage;
    }

    public void setGarage(String garage) {
        this.garage = garage;
    }

    public String getLicensePlates() {
        return licensePlates;
    }

    public void setLicensePlates(String licensePlates) {
        this.licensePlates = licensePlates;
    }

    public String getStartAddress() {
        return startAddress;
    }

    public void setStartAddress(String startAddress) {
        this.startAddress = startAddress;
    }

    public String getEndAddress() {
        return endAddress;
    }

    public void setEndAddress(String endAddress) {
        this.endAddress = endAddress;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStartHour() {
        return startHour;
    }

    public void setStartHour(String startHour) {
        this.startHour = startHour;
    }

    public CarType getCarType() {
        return carType;
    }

    public void setCarType(CarType carType) {
        this.carType = carType;
    }
}
