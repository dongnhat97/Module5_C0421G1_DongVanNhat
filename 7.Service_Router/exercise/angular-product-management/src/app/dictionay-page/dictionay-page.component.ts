import { Component, OnInit } from '@angular/core';
import {IWord} from "../iword";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-dictionay-page',
  templateUrl: './dictionay-page.component.html',
  styleUrls: ['./dictionay-page.component.css']
})
export class DictionayPageComponent implements OnInit {
  dictionarys: IWord[];

  constructor(private dictionaryService:  ServiceService, ) {

  }

  ngOnInit(): void {
    this.getAll()

  }
  getAll() {
    this.dictionarys = this.dictionaryService.getAll();
    console.log(this.dictionarys);
  }
}
