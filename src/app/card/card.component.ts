import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input('title') title: string;
  @Input('paragraphText') paragraphText: string;
  @Input('listOfData') listOfData: Array<string>;

  @Output() closeCard = new EventEmitter();
  @Output() onItemClicked = new EventEmitter();
  
  showBody: boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.listOfData.length > 0) this.showBody = true;
  }
  
  close() {
    this.closeCard.emit();
  }
}
