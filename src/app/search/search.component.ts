import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { MovieStoreService } from '../moviestore.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private generalservice: UserService, private moviestoreservice:MovieStoreService) { }
  
  ngOnInit() {
  }
  
}
