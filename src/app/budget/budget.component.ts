import { Component, OnInit } from '@angular/core';
import { MyMoviesComponent} from '../my-movies/my-movies.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("the id parameter is: " + params.id);
    });
  }

}
