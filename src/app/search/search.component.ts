import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { MovieStoreService } from '../moviestore.service';
// import { DataService } from '../data.service';
// private data: DataService
@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  constructor(private generalservice: UserService, private moviestoreservice:MovieStoreService) { }
  search: string;

  ngOnInit() {
    // this.data.currentSearch.subscribe(search=>this.search=search);
  }

}
