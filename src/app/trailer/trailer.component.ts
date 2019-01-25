import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild
} from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';
import {
  Video
} from '../video';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  private _selVideo: Video;

  @Input('selVideo')
  set selVideo(selVideo: Video) {
    this._selVideo = selVideo;
    this.getYouTubeUrl();
  }
  get selVideo(): Video {
    return this._selVideo;
  }


  @Output() closedVideoEmitter = new EventEmitter();

  newVideoId: string = "";

  safeUrl: SafeResourceUrl;

  @ViewChild("trailer") trailer: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    console.log("init trailer");
    this.trailer.nativeElement.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  getYouTubeUrl() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this._selVideo.id + "?controls=0");
  }

  closeTrailer() {
    this.closedVideoEmitter.emit(this.newVideoId);
  }

}
