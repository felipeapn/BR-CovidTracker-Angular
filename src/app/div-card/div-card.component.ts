import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-div-card',
  templateUrl: './div-card.component.html',
  styleUrls: ['./div-card.component.css']
})
export class DivCardComponent implements OnInit {

  @Input() icon : string;
  @Input() label : string;
  @Input() value: string;
  @Input() colour: string;

  constructor() { }

  ngOnInit() {
  }

}
