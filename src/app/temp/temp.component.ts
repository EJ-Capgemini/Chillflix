import { Component, OnInit, Output } from '@angular/core';
import { VideoService } from '../video.service';
import { Film } from '../film';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.scss']
})
export class TempComponent implements OnInit {
  
  test:string = "hallo";
  test2:string = "doei";

  list:Array<string> = [this.test, this.test2];

  films:Array<Film>;

  constructor(private videoService:VideoService) { }

  ngOnInit() {
    console.log("test");
    // this.films = this.videoService.getAll2();

    // this.videoService.getAll2().subscribe(data => this.films = data);
    // console.log(this.videoService.getAll().subscribe(
    //   (data: Array<Film>) => {
    //     this.films = data;
    //   }));
  }

  onAddToList(){
    this.list.push(this.test2);
  }

  onRemoveFromList(i){
    this.list.splice(i, 1);
  }
}
