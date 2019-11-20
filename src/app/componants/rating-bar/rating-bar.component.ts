import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input() label:String;
  @Input() rating: number;
  @Input() skill: String;

  constructor() { 
  }

  getStyleD(rating){
    // background: linear-gradient(120deg, #66cc99 60%, #4a4e51 60%); */
    return "linear-gradient(120deg, #66cc99, "+rating+"%, #4a4e51 " + (100-rating) +"%)";
  }

  ngOnInit() {
  }

}
