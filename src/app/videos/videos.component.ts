import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../_models/video';
import { IAppState } from '../_store/app-state.interface';
import { Store, select } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import * as fromVideo from '../_store/video/video.action';
import { IVideo } from '../_store/video/video.interface';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  
  videos:Array<Video>;
  videos$:Observable<IVideo>;
  filteredVideos:Array<Video>;
  selVideo:Video;

  perRow:number = 5;
  rowRange:Array<Number>;
  remainingToDisplay:number;

  //Hardcoded rows, omdat er geen functie aangeroepen kan worden in een html loop. Betere oplossing?
  //Array met arrays?
  firstRow:Array<Video>;
  secondRow:Array<Video>;
  thirdRow:Array<Video>;
  
  genreOptions = [
    { name: "Toon alles", value: "" },
    { name: "Biography", value: "Biography" },
    { name: "Drama", value: "Drama" },
    { name: "History", value: "History" },
    { name: "Adventure", value: "Adventure" },
    { name: "Action", value: "Action" },
    { name: "Sci-Fi", value: "Sci-Fi" },
    { name: "Thriller", value: "Thriller" },
    { name: "Comedy", value: "Comedy" },
    { name: "Documentary", value: "Documentary" },
    { name: "Crime", value: "Crime" }
  ];

  selectedGenre: string = this.genreOptions[0]["name"];;

  @ViewChild('genre') genre: ElementRef;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos(){
    // this.videoService.getVideos().subscribe((data: Video[])=> {
    //   this.videos = data;
    //   this.filteredVideos = this.videos;
    //   // this.remainingToDisplay = this.filteredVideos.length;
    //   // this.setRowRange();
    //   // this.updateRows();
    //   this.assignRows();
    // });

    this.store.dispatch(new fromVideo.Load());
    this.videos$ = this.store.pipe(select<IAppState>((s: { videos: any; }) => s.videos)); // s(IAppState) -> unexpected end of input
    this.videos$.subscribe(videos => {
      this.videos = videos.items;
      this.filteredVideos = this.videos;
      this.assignRows();
    });
  } 

  showTrailer(selVideo:Video){
    this.selVideo = selVideo;
  }

  closedTrailer(newVideoId:string){
    console.log("this.selVideoId wordt gewijzigd van " + this.selVideo + " naar " + newVideoId);
    this.selVideo = null;
  }

  filter(){      
    console.log("Er wordt gesorteerd op genre: " + this.selectedGenre);
    if(this.genreOptions[0]["name"] == this.selectedGenre ){
      this.filteredVideos = this.videos;
    } else {
      this.filteredVideos = this.videos.filter(
        video => video.genre.indexOf(this.selectedGenre) >= 0);
    }
    this.assignRows();;
  }

    //Aantal rijen (op basis van aantal video's (na filteren)) op slaan in een lijst voor gebruik in html.
    setRowRange(){
      this.rowRange = new Array();
  
      for (let i = 0; i < Math.floor(((this.filteredVideos.length / this.perRow) - (1 / this.perRow)) + 1); i++){
        this.rowRange.push(i);
      }
  
      //debug
      this.rowRange.forEach(function(entry) {
        console.log("rowRange value: " + entry);
      });
    }

  /*
    Voor elke gefilterde video berekenen in welke rij ze landen.
    perRow variable bovenin bepaalt hoeveel per rij.
    Omdat niet gedeeld kan worden door 0, wordt bij 1 begonnen en wordt dit meteen erna gecorrigeerd
    dmv "1 / this.perRow" er weer af te halen.
  */
  updateRows(){
    for (let i = 1; i <= this.filteredVideos.length; i++) {
      this.filteredVideos[i - 1].row = Math.floor((i / this.perRow) - (1 / this.perRow));
      // console.log(this.filteredVideos[i - 1].title + " - " + this.filteredVideos[i - 1].row);
    }
  }

  assignRows(){
    for (let i = 1; i <= this.filteredVideos.length; i++) {
      this.filteredVideos[i - 1].row = Math.floor((i / this.perRow) - (1 / this.perRow));
    }

    this.firstRow = new Array();
    if (this.filteredVideos.length > this.perRow) {
      this.secondRow = new Array();
    } else {
      this.secondRow = null;
      this.thirdRow = null;
    }

    if (this.filteredVideos.length > (2 * this.perRow)) {
      this.thirdRow = new Array();
    }

    for (let i = 1; i <= this.filteredVideos.length; i++) {
      let row = Math.floor((i / this.perRow) - (1 / this.perRow));
      if (row == 0){
        this.firstRow.push(this.filteredVideos[i -1]);
      } else if (row == 1){
        this.secondRow.push(this.filteredVideos[i - 1]);
      } else if (row ==2){
        this.thirdRow.push(this.filteredVideos[i - 1]);
      }
    }
  }

  /*
    Bepalen hoeveel er in de huidige rij getoond moeten worden. Waarde van perRow mits er nog minder over zijn.
  */
  availableToShow() : number {
    let value = this.remainingToDisplay >= this.perRow ? this.perRow : this.remainingToDisplay;
    this.remainingToDisplay -= value;
    return value;
  }

  getCurRowVideos(curRow:number) : Array<Video> {
    let curRowVideos = new Array<Video>();
    let start = curRow * this.perRow;
    let max = start += this.availableToShow();

    for (let i = start; i < max; i++){
      curRowVideos.push(this.filteredVideos[i]);
    }

    //debug
    curRowVideos.forEach(function(entry) {
       console.log("curRowVideos value: " + entry);
    });

    return curRowVideos;
  }
}
