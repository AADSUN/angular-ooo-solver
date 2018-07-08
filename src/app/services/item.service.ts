import { Injectable } from '@angular/core';
import { Item } from '../item';
import { WikipediaService } from './wikipedia.service';

@Injectable()
export class ItemService {
  listOfItems: Array<Item> = [];
  constructor(private _wikiService: WikipediaService) { }

  addItem(textInput: string) {
    if (textInput === "") return;
    if (this.listOfItems.some(e => e.title.toLowerCase() === textInput.toLowerCase())){
      console.log("Item has already been inputted."); // Replace with a non-intrustive alert
      return;
    }

    let item = new Item(textInput, 2);
    this.listOfItems.push(item);
    this.getItemData(item);
  }

  getItem(itemName){
    let returnValue = null;
    this.listOfItems.forEach(element => {
      if (element.title.toLowerCase() === itemName.toLowerCase()) returnValue = element;
    });
    return returnValue;
  }

  deleteItem(itemName) {
    for(var i = 0; i < this.listOfItems.length; i++) {
      if (this.listOfItems[i].title.toLowerCase() === itemName.toLowerCase()) {
        this.listOfItems.splice(i, 1);
        return true;;
      }
    }
    return false;
  }

  getItemData(item: Item){
    if (item.isReady() || !item.isValid()) return;
    this._wikiService.getCategories(item.pendingCategories).then((data) => {
      let listOfNewCategories = [];
      for (const [key, value] of Object.entries(data)) {
        if (value == undefined) {
          item.status.isMissing = true;
          break;
        }
        for (const [i, category] of Object.entries(value)) {
          if (category['title'] == "Category:Disambiguation pages") {
            item.status.isAmbig = true;
            this.getItemLinks(item);
            break;
          }
          listOfNewCategories.push(category['title']);
        }
      }
      item.addCategories(listOfNewCategories);
      this.getItemData(item);
    }).catch((err) => {
      console.log(err);
    })
  }

  getItemLinks(item: Item) {
    this._wikiService.getLinks(item.title).then((data: Array<string>) => {
      item.links = data;
    }).catch((err) => {
      console.log(err);
    })
  }
}
