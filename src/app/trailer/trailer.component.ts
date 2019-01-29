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
import { Video } from '../_models/video';

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
      block: "end"
    });
  }

  getYouTubeUrl() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this._selVideo.id + "?controls=0");
  }

  closeTrailer() {
    this.closedVideoEmitter.emit(this.newVideoId);
  }

  scrollIntoView(element) {
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top;
    const middleDiff = (elementRect.height / 2);
    const scrollTopOfElement = absoluteElementTop + middleDiff;
    const scrollY = scrollTopOfElement - (window.innerHeight / 2);
    window.scrollTo(0, scrollY);
  }

}
