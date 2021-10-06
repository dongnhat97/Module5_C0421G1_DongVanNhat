import { Injectable } from '@angular/core';
import {IWord} from "./iword";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  dictionarys: IWord[] = [
    {
      id: 1,
      word: 'Dictionary',
      mean: 'Từ điển'
    },
    {
      id: 2,
      word: 'Bye',
      mean: 'Tạm biệt'
    },
    {
      id: 3,
      word: 'Rose',
      mean: 'Hoa hồng'
    },
    {
      id: 4,
      word: 'Cat',
      mean: 'Con mèo'
    },
    {
      id: 5,
      word: 'Hello',
      mean: 'Xin chào'
    }
  ];

  constructor() { }
  getAll() {
    return this.dictionarys;
  }

  findById(wordId: number) {
    // return this.dictionarys.find(item => item.id === wordId);
    for (let dictionary of this.dictionarys) {
      if (dictionary.id===wordId) {
        return dictionary
      }
    }
    return null;
  }
}
