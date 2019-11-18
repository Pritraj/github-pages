import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input() rating: number;
  @Input() skill: String;

  constructor() { 

  }

  ngOnInit() {
  }

}
