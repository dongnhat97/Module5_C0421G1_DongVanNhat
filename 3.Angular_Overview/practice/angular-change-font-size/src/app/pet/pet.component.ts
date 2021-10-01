import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'https://sieupet.com/sites/default/files/gia-cho-shiba-inu-02-768x768_0.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
// import { Component, OnInit } from '@angular/core';
// import {Pet} from '../pet';
//
// @Component({
//   selector: 'app-pet',
//   templateUrl: './pet.component.html',
//   styleUrls: ['./pet.component.css']
// })
// export class PetComponent implements OnInit {
//   pet: Pet = {
//     name: 'puppie',
//     image: 'https://sieupet.com/sites/default/files/gia-cho-shiba-inu-02-768x768_0.jpg'
//   };
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
