import { Component, OnInit, Output } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {
  
  test:string = "hallo";
  test2:string = "doei";

  list:Array<string> = [this.test, this.test2];

  constructor() { }

  ngOnInit() {
  }

  onAddToList(){
    this.list.push(this.test2);
  }

  onRemoveFromList(i){
    this.list.splice(i, 1);
  }
}
