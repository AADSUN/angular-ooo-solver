import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable()
export class ItemService {
  listOfItems: Array<Item> = [];
  constructor() { }

  addNewItem(textInput: string){
    if (textInput === "") return;
    if (this.listOfItems.some(e => e.title === textInput)){
      console.log("Item has already been inputted."); // Replace with a non-intrustive alert
      return;
    }

    let item = new Item();
    item.title = textInput;
    this.listOfItems.push(item);
  }
}
