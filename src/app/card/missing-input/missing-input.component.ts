import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service'; 
import { Item } from '../../item';

@Component({
  selector: 'app-missing-input',
  templateUrl: './missing-input.component.html',
  styleUrls: ['./missing-input.component.css']
})
export class MissingInputComponent implements OnInit {
  @Input('item') item: Item;
  @Output() closeCard = new EventEmitter();

  constructor(private _itemService: ItemService) { }

  ngOnInit() {
  }

  close() {
    let title = this.item.title;
    this._itemService.deleteItem(title);
    console.log("The input '" + title + "' has been removed."); // Replace with non-intrusive alert
    this.closeCard.emit();
  }

}
