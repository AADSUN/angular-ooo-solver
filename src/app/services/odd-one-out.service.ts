import { Injectable } from '@angular/core';
import { Item } from '../item';

@Injectable()
export class OddOneOutService {

  constructor() {}

  getOddOneOut(listOfItems: Array<Item>) {    
    if (listOfItems.length <= 2) throw "Invalid parameter length";
    for (let i = 0; i < listOfItems.length; i++) {
      if (!listOfItems[i].isReady()) throw "Certain items are not ready";
    }
    
    let intersections = this.getIntersections(listOfItems);
    let currMax = 0;
    let maxIndex = 0;

    // Find combination of items that have the highest common categories
    for (let i = 0; i < intersections.length; i++) {
      if (intersections[i].categories.length > currMax) {
        currMax = intersections[i].categories.length;
        maxIndex = i;
      }
    }

    if (currMax == 0) {
      return null;
    }

    // Find the missing item from the list of items, which will be the odd one out
    for (let i = 0; i < listOfItems.length; i++) {
      if (!intersections[maxIndex].titles.includes(listOfItems[i].title)) {
        return {
          oddOneOut: listOfItems[i].title,
          commonItems: intersections[maxIndex].categories
        }
      }
    }
  }

  private getIntersections(listOfItems: Array<Item>) {
    let outputData = [];
    for (let i=0; i<listOfItems.length; i++) {
      let copyListOfItems = listOfItems.slice();
      copyListOfItems.splice(i, 1);
      outputData.push(this.getAllCategories(copyListOfItems));
    }
    return outputData;
  }

  private getAllCategories(items: Array<Item>) {
    let arrayOfItems = items.slice();
    let tmpHolder = {
      'titles': [items[0].title],
      'categories': items[0].categories
    }
    
    for (let i = 1; i < arrayOfItems.length; i++) {
      tmpHolder['titles'].push(arrayOfItems[i].title);
      tmpHolder['categories'] = tmpHolder['categories'].filter(x => arrayOfItems[i].categories.includes(x));
    }
    return tmpHolder;
  }
}
