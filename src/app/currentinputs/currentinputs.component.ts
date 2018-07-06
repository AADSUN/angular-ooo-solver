import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-currentinputs',
  templateUrl: './currentinputs.component.html',
  styleUrls: ['./currentinputs.component.css']
})
export class CurrentinputsComponent implements OnInit {
  @Input('listOfInputs') listOfInputs: Array<Item>;
  @Output() modifyInput = new EventEmitter<Item>();

  constructor() {}

  ngOnInit() {
  }

  itemClicked(event){
    this.modifyInput.emit(event.childNodes[0]);
  }

}
