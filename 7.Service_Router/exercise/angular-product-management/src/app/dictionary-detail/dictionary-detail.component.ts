import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";
import {ActivatedRoute} from "@angular/router";
import {IWord} from "../iword";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  findWord: IWord;

  constructor(private dictionaryService: ServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const wordId = Number(this.route.snapshot.paramMap.get('id'));
    this.findWord = this.dictionaryService.findById(wordId);
  }

}
