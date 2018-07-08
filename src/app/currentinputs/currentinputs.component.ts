import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-currentinputs',
  templateUrl: './currentinputs.component.html',
  styleUrls: ['./currentinputs.component.css']
})
export class CurrentinputsComponent implements OnInit {
  @Input('listOfInputs') listOfInputs: Array<Item>;
  @Output() onItemClicked = new EventEmitter<Item>();

  constructor(private _itemService: ItemService) {}

  ngOnInit() {
  }

  itemClicked(itemName) {
    this.onItemClicked.emit(itemName);
  }

  deleteItem(itemName) {
    this._itemService.deleteItem(itemName);
  }

}
