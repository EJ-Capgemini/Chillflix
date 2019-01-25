import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  video:Video;

  videoForm = new FormGroup({
    youtube_id: new FormControl(''),
    video_title: new FormControl(''),
    video_description: new FormControl(''),
    video_thumbnail: new FormControl(''),
    video_genre: new FormControl(''),
    video_duration: new FormControl('')
    // youtube_id: new FormControl('y3GLhAumiec'),
    // video_title: new FormControl('IO'),
    // video_description: new FormControl('On the heels of their six-time Academy Award®-winning smash, La La Land, Oscar®-winning director Damien Chazelle and star Ryan Gosling reteam for Universal Pictures’ First Man, the riveting story of NASA’s mission to land a man on the moon, focusing on Neil Armstrong and the years 1961-1969.  A visceral, first-person account, based on the book by James R. Hansen, the movie will explore the sacrifices and the cost—on Armstrong and on the nation—of one of the most dangerous missions in history.'),
    // video_thumbnail: new FormControl('https://m.media-amazon.com/images/M/MV5BNmU4NTc0ZTgtNjliOC00NTM2LWE3NDktNGJiNzc2YzY3ZjA2XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UX182_CR0,0,182,268_AL_.jpg'),
    // video_genre: new FormControl('Adventure, Drama, Romance'),
    // video_duration: new FormControl('96 minuten')
  });

  @ViewChild('iframe') iframe: ElementRef;
  @ViewChild('thumbnail') thumbnail: ElementRef;
  
  fileNameDialogRef: MatDialogRef<DialogComponent>;

  constructor(private videoService:VideoService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onVerifyYouTube(){
    console.log("focus lost yt id");
    this.iframe.nativeElement.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + this.videoForm.get('youtube_id').value + '?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
  }

  onVerifyImage(){
    console.log("focus lost image");
    this.thumbnail.nativeElement.innerHTML = '<img src="' + this.videoForm.get('video_thumbnail').value + '">';
  }

  onSubmit() {
    this.video = new Video();
    this.video.id = this.videoForm.get('youtube_id').value;
    this.video.title = this.videoForm.get('video_title').value;
    this.video.description = this.videoForm.get('video_description').value;
    this.video.thumbnail = this.videoForm.get('video_thumbnail').value;
    this.video.genre = this.videoForm.get('video_genre').value;
    this.video.duration = this.videoForm.get('video_duration').value;

    // this.videoService.addVideo(this.video); //Werkt, maar wil db niet vullen met onzin.
    this.openAddFileDialog();
  }

  onFocus(event){
    console.log("focussed!");
    event.target.parentElement.classList.add('focus');
  }

  openAddFileDialog() {
    if (this.fileNameDialogRef) return;
    this.fileNameDialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      height: '150px',
    });
  
    this.fileNameDialogRef.afterClosed().pipe(
      finalize(() => this.fileNameDialogRef = undefined)
    );
  }
}
