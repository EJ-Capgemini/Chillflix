import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  
  videos:Array<Video>;
  filteredVideos:Array<Video>;
  selVideo:Video;
  
  genreOptions = [
    { name: "Toon alles", value: "" },
    { name: "Biography", value: "Biography" },
    { name: "Drama", value: "Drama" },
    { name: "History", value: "History" },
    { name: "Adventure", value: "Adventure" },
    { name: "Action", value: "Action" },
    { name: "Sci-Fi", value: "Sci-Fi" },
    { name: "Horror", value: "Horror" }
  ];

  selectedGenre: string = this.genreOptions[0]["name"];;

  @ViewChild('genre') genre: ElementRef;

  constructor(private videoService: VideoService) { }

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos(){
    this.videoService.getVideos().subscribe((data: Video[])=> {
      this.videos = data;
      this.filteredVideos = this.videos;
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
  }
}
