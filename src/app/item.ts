export class Item {
  title: string;
  status = {
    isMissing: false,
    isAmbig: false,
  }
  categories: Array<string> = [];
  pendingCategories: Array<string> = [];
  links: Array<string> = [];
  maxDepth: number;
  private currDepth: number = 0;

  constructor(title: string, maxDepth: number){
    this.title = title;
    this.pendingCategories.push(title);
    this.maxDepth = maxDepth;
  }

  isReady() {
    return this.currDepth >= this.maxDepth; 
  }

  isValid() {
    return !this.status.isMissing && !this.status.isAmbig;
  }

  chooseLinkTitle(aLink: string) {
    if (this.links.includes(aLink)) {
      this.resetItem(aLink);
      return true;
    }
    return false;
  }

  addCategories(listOfCategories: Array<string>){
    let newCategories = listOfCategories.slice();
    this.pendingCategories = [];
    
    for (let i = 0; i < newCategories.length; i++) {
      if (!this.categories.includes(listOfCategories[i])) {
        this.categories.push(listOfCategories[i]);
        this.pendingCategories.push(listOfCategories[i]);
      }
    }
    this.currDepth++;
  }

  private resetItem(title: string) {
    this.title = title;
    this.categories = [];
    this.links = [];
    this.pendingCategories = [title];
    this.currDepth = 0;
    this.status.isMissing = false;
    this.status.isAmbig = false;    
  }
}