import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  itemList:string;
  images:Array<string> = [];
  
  

  
  addVell(xyz){
    this.images.push(xyz);

  }
  RemoveItem(item: any){
     this.images.splice(this.images.indexOf(item),1);
  }

}
