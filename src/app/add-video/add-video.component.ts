import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  youTubeId:string = "y3GLhAumiec";
  @ViewChild('iframe') iframe: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onVerify(){
    this.iframe.nativeElement.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + this.youTubeId + '?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  }
}
