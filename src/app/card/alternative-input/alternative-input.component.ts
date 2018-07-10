import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../item';

@Component({
  selector: 'app-alternative-input',
  templateUrl: './alternative-input.component.html',
  styleUrls: ['./alternative-input.component.css']
})
export class AlternativeInputComponent implements OnInit {
  @Input('item') item: Item;
  @Output() closeCard = new EventEmitter();

  constructor(private _itemService: ItemService) {}

  ngOnInit() {
  }

  itemClicked(linkName: string) {
    let title = this.item.title;
    this._itemService.selectLink(this.item, linkName);  
    console.log("The input '" + title + "' has been replaced with " + linkName + "."); // Replace with non-intrusive alert
    this.closeCard.emit();
  }

  close() {
    this.closeCard.emit();
  }
}
