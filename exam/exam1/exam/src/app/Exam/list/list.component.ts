import {Component, OnInit} from '@angular/core';
import {Car} from "../car";
import {CarService} from "../service/car.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  cinemas: Car[];


  constructor(private carService: CarService) {


  }

  ngOnInit(): void {
    this.carService.findAll().subscribe(next => {
      this.cinemas = next;
      console.log(this.cinemas)
    }, error => {

    }, () => {
    })
  }


}
