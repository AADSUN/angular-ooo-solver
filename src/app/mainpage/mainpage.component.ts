import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { OddOneOutService } from '../services/odd-one-out.service';
import { Item } from '../item';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  textField: string = "";
  listOfInputs: Array<Item>;
  
  selectedItem: Item;
  showCard: string = "";

  constructor(private _itemService: ItemService, private _oddOneOutService: OddOneOutService) { 
    this.listOfInputs = this._itemService.listOfItems;
    this.addNewInput("Apple");
    this.addNewInput("Banana");
    this.addNewInput("Peach");
    this.addNewInput("Pie");
  }

  ngOnInit() {
  }

  submit(){
    try {
      let result = this._oddOneOutService.getOddOneOut(this.listOfInputs);
      console.log(result);
    }
    catch(e) {
      if (e == "Invalid parameter length") {
        console.log("Required 3 items or more");
      }
      else if (e == "Certain items are not ready") {
        console.log("Certain items are not ready yet");
      }
      else {
        console.log("Unknown error");
      }
    }    
  }

  closeCard() {
    this.selectedItem = null;
  }

  addNewInput(textInput: string){
    this._itemService.addItem(textInput, 3);
    this.textField = "";
  }

  onItemClicked(data){
    let item = this._itemService.getItem(data);
    this.selectedItem = item;
    if (this.selectedItem == null) return;
    if (item.status.isAmbig) {
      this.showCard = "alternativeInput";
    }
    else if (item.status.isMissing) {
      this.showCard = "missingInput";
    }
    else {
      this.showCard = "moreInformation";
    }
  }
}
