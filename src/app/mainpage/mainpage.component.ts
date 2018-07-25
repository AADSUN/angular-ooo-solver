import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../services/item.service';
import { OddOneOutService } from '../services/odd-one-out.service';
import { AlertComponent } from '../alert/alert.component';
import { Item } from '../item';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  @ViewChild(AlertComponent)
  private alertComponent: AlertComponent;

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
        this.alertComponent.createAlert("No result could be found!", "primary", 3000); // Todo: Search a higher depth
        return;
      }
      result['paragraphText'] = "The item '" + result.oddOneOut + "', was selected to be the odd one out due to not falling into the categories shown below."
      this.result = result;
    }
    catch(e) {
      if (e == "Invalid parameter length") {
        this.alertComponent.createAlert("To determine the odd one out, a minimum of 3 items are required to be inputted!", "warning", 7000);
      }
      else if (e == "Certain items are not ready") {
        this.alertComponent.createAlert("Please ensure all items are valid, and allow items to load before solving!", "warning", 7000);
      }
      else {
        this.alertComponent.createAlert("An unknown error has occured, please try refreshing the page and try again. " +
                                        "If the problem persists, please email 'davidngu28@gmail.com' with details.", "danger", 0);
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
    if (item == null || (!item.isReady()) && item.isValid()) return;
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
      let oldTitle = (' ' + this.selectedItem.title).slice(1);
      this._itemService.selectLink(this.selectedItem, itemSelected);  
      this.alertComponent.createAlert("The input '" + oldTitle + "' has been replaced with " + itemSelected + ".", "info", 6000);
      this.closeCard();
    }
  }

  cardsOpen() {
    return this.listOfInputs.length > 0 || this.showCard || this.result != null;
  }
}
