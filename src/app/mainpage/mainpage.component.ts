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
    this.addNewInput("Mockup Data 1");
    this.addNewInput("Mockup Data 2");
    this.addNewInput("Mockup Data 3");
  }

  ngOnInit() {
  }

  submit(){
    console.log("Submit pressed");
  }

  addNewInput(textInput: string){
    this._itemService.addNewItem(textInput);
    this.textField = "";
  }

  onModifyInput(data){
    // this.textField = data;
    // console.log(data);
  }
}
