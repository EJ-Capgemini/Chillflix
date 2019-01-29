import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { VideoService } from '../video.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Video } from '../_models/video';
import { UtilService } from '../util.service';
import { MustMatch } from '../_helpers/must-match.validator';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  video:Video;
  submitted = false;

  // videoForm = new FormGroup({
  //   youtube_id: new FormControl(''),
  //   video_title: new FormControl(''),
  //   video_description: new FormControl(''),
  //   video_thumbnail: new FormControl(''),
  //   video_genre: new FormControl(''),
  //   video_duration: new FormControl('')
  // });

  videoForm:FormGroup; 

  @ViewChild('iframe') iframe: ElementRef;
  @ViewChild('thumbnail') thumbnail: ElementRef;

  constructor(private videoService:VideoService, private utilService:UtilService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
      youtube_id: ['', Validators.required, Validators.minLength(11), Validators.maxLength(11)],
      video_title: ['', Validators.required],
      video_description: ['', Validators.required],
      video_thumbnail: ['', Validators.required, Validators.pattern(/(.*?)\.(jpg|png|jpeg)/g)],
      video_genre: ['', Validators.required],
      video_duration: ['', Validators.required]
    }, {});
  }

  onVerifyYouTube(){
    this.iframe.nativeElement.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + this.videoForm.get('youtube_id').value + '?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
  }

  onVerifyImage(){
    this.thumbnail.nativeElement.innerHTML = '<img src="' + this.videoForm.get('video_thumbnail').value + '">';
  }

  onSubmit() {

    this.submitted = true;

    if(!this.videoForm.invalid){
      this.video = new Video();
      this.video.id = this.videoForm.get('youtube_id').value;
      this.video.title = this.videoForm.get('video_title').value;
      this.video.description = this.videoForm.get('video_description').value;
      this.video.thumbnail = this.videoForm.get('video_thumbnail').value;
      this.video.genre = this.videoForm.get('video_genre').value;
      this.video.duration = this.videoForm.get('video_duration').value;

      // this.videoService.addVideo(this.video); //Werkt, maar wil db niet vullen met onzin.
      this.utilService.openDialog("Video is succesvol toegevoegd!");      
    } else {
      return;
    }
  }

  onFocus(event){
    event.target.parentElement.classList.add('focus');
  }

  // convenience getter for easy access to form fields
  get f() { return this.videoForm.controls; }
}
