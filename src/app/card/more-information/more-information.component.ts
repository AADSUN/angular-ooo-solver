import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../item';

@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.css']
})
export class MoreInformationComponent implements OnInit {
  @Input('item') item: Item;
  @Output() closeCard = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  close() {
    this.closeCard.emit();
  }
}
