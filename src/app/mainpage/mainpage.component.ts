import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { OddOneOutService } from '../services/odd-one-out.service';
import { Item } from '../item';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  textField: string = "";
  listOfInputs: Array<Item>;
  result: Object;
  selectedItem: Item;
  showCard: boolean = false;
  showHelp: boolean = true;
  cardDetails: {
    title: string,
    paragraphText: string,
    listOfData: Object
  }

  constructor(private _itemService: ItemService, private _oddOneOutService: OddOneOutService) { 
    this.listOfInputs = this._itemService.listOfItems;
  }

  ngOnInit() {
  }

  submit(){
    try {
      let result = this._oddOneOutService.getOddOneOut(this.listOfInputs);
      if (result == null) {
        console.log("No result could be found.") // Todo: Search a higher depth
        return;
      }
      result['paragraphText'] = "The item '" + result.oddOneOut + "', was selected to be the odd one out due to not falling into the categories shown below."
      this.result = result;
    }
    catch(e) {
      if (e == "Invalid parameter length") {
        console.log("Required 3 items or more");
      }
      else if (e == "Certain items are not ready") {
        console.log("Certain items are not ready yet");
      }
      else {
        console.log("Unknown error", e);
      }
    }    
  }

  closeCard() {
    this.showCard = false;
  }

  closeResultCard() {
    this.result = null;
  }

  addNewInput(textInput: string) {
    this._itemService.addItem(textInput, 3);
    this.textField = "";
  }

  onItemClicked(data) {
    let item = this._itemService.getItem(data);
    if (item == null) return;
    this.selectedItem = item;
    if (item.status.isAmbig) {
      this.cardDetails = {
        title: "Alternative Input",
        paragraphText: "Select a more specific input instead of '" + item.title + "'. Click on an item to change it.",
        listOfData: item.links
      }
    }
    else if (item.status.isMissing) {
      this.cardDetails = {
        title: "Data not found",
        paragraphText: "The input '" + item.title + "' was unable to be found on Wikipedia. Please try another word.",
        listOfData: []
      }
    }
    else {
      this.cardDetails = {
        title: "More information",
        paragraphText: "The input '" + item.title + "', can be described with the following categories.",
        listOfData: item.categories
      }
    }
    this.showCard = true;
  }

  cardItemClicked(data) {
    let cardTitle = data[0];
    let itemSelected = data[1];

    if (cardTitle == "Alternative Input") {  
      this._itemService.selectLink(this.selectedItem, itemSelected);  
      console.log("The input '" + this.selectedItem.title + "' has been replaced with " + itemSelected + "."); // Replace with non-intrusive alert
      this.closeCard();
    }
  }


  cardsOpen() {
    return this.listOfInputs.length > 0 || this.showCard || this.result != null;
  }
}
