import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../item';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  textField: string = "";
  listOfInputs: Array<Item>;

  constructor(private _itemService: ItemService) { 
    this.listOfInputs = this._itemService.listOfItems;
    this.addNewInput("Apple");
    this.addNewInput("Banana");
    this.addNewInput("NoPage123");
    this.addNewInput("table");
  }

  ngOnInit() {
  }

  submit(){
    console.log("Submit pressed");
  }

  addNewInput(textInput: string){
    this._itemService.addItem(textInput);
    this.textField = "";
  }

  onItemClicked(data){
    // return;
    let item = this._itemService.getItem(data);
    console.log("----");
    console.log(item);
    console.log("----");
  }
}
