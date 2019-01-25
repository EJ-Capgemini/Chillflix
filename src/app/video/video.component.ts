import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { Video } from '../video';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoId:string;
  video:Video;

  constructor(private videoService: VideoService, private route: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoId = this.route.snapshot.params['id'];
    this.videoService.getVideo(this.videoId).subscribe(data => this.video = data);
  }

  getYouTubeUrl(){
    let url:SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.videoId + "?controls=0");
    console.log(url);
    
    return url;
  }
}
