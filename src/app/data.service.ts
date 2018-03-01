import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private searchInput = new BehaviorSubject<string>("default value");
  currentSearch = this.searchInput.asObservable();

  constructor() { }
  changeSearch(search: string){
    this.searchInput.next(search);
  }

}
