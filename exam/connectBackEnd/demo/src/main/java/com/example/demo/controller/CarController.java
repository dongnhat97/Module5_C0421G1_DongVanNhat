package com.example.demo.controller;

import com.example.demo.dto.CarDto;
import com.example.demo.model.entity.Car;
import com.example.demo.model.service.ICarService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("car/api")
public class CarController {
    @Autowired
    private ICarService iCarService;
    @GetMapping
    public ResponseEntity<List<Car>> getCarList() {
        List<Car> carList = this.iCarService.findAll();
        if (carList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(carList, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarDetail(@PathVariable("id") Long id) {
        Car car = iCarService.findById(id);

        if (car==null) {
            return new ResponseEntity<>( HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(car,HttpStatus.OK);
    }

   @PostMapping("/create")
   public ResponseEntity addCar(@RequestBody CarDto carDto) {
         Car car = new Car();
       BeanUtils.copyProperties(carDto,car);
       iCarService.save(car);
       return new ResponseEntity(car,HttpStatus.OK);
   }

   @PutMapping("/{id}")
   public ResponseEntity<Car> updateCar(@PathVariable Long id,
                                        @RequestBody CarDto carDto) {
         Car car = iCarService.findById(id);
         if (car==null) {
             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
         }
         car.setGarage(carDto.getGarage());
         car.setLicensePlates(carDto.getLicensePlates());
         car.setCarType(carDto.getCarType());
         car.setStartAddress(carDto.getStartAddress());
         car.setEndAddress(carDto.getEndAddress());
         car.setEmail(carDto.getEmail());
         car.setPhone(carDto.getPhone());
         car.setStartHour(carDto.getStartHour());
         iCarService.save(car);
         return new ResponseEntity<>(car,HttpStatus.OK);
   }

    @DeleteMapping("/{id}")
    public ResponseEntity<Car> deleteCar(@PathVariable Long id) {
       Car currentCar = iCarService.findById(id);
        if (currentCar==null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        iCarService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
