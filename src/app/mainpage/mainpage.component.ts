import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  textField: string = "";
  listOfInputs: Array<String> = [];

  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log("Submit pressed");
  }

  enterPressed(textInput: string){
    if (textInput === "") return;
    console.log(textInput);
    this.textField = "";
  }
}
