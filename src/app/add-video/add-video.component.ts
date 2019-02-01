import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Video } from '../_models/video';
import { UtilService } from '../util.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromVideo from '../_store/video/video.action';
import { IAppState } from '../_store/app-state.interface';
import { IVideo } from '../_store/video/video.interface';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {

  video:Video;
  video$:Observable<Video>;
  submitted = false;

  videoForm:FormGroup; 

  @ViewChild('iframe') iframe: ElementRef;
  @ViewChild('thumbnail') thumbnail: ElementRef;

  //hier geen service meer gebruiken. Puur store.
  constructor(private utilService:UtilService, private formBuilder: FormBuilder, private readonly store: Store<IAppState>) {}

  ngOnInit() {
    this.videoForm = this.formBuilder.group({
      youtube_id: ['', [Validators.required]],
      video_title: ['', [Validators.required]],
      video_description: ['', [Validators.required]],
      video_thumbnail: ['', [Validators.required, Validators.pattern(/(.*?)\.(jpg|png|jpeg)/g)]],
      video_genre: ['', [Validators.required]],
      video_duration: ['', [Validators.required]]
    }, {});

    //Ophalen van eerder ingevulde gegevens. Returned null als deze er niet zijn.
    // this.video$ = this.store.pipe(
    //   select(store => store.video)
    // );
  
    //Data in variabale video gooien.
    // this.video$.subscribe(video => this.video = video);

    //Indien er een (gedeeltelijk) ingevulde video is de data tonen.
    // if(this.video){
    //   this.videoForm.controls['youtube_id'].setValue(this.video.id);
    //   this.videoForm.controls['video_title'].setValue(this.video.title);
    //   this.videoForm.controls['video_description'].setValue(this.video.description);
    //   this.videoForm.controls['video_thumbnail'].setValue(this.video.thumbnail);
    //   this.videoForm.controls['video_genre'].setValue(this.video.genre);
    //   this.videoForm.controls['video_duration'].setValue(this.video.duration);
    // }
  }

  onVerifyYouTube(){
    this.iframe.nativeElement.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + this.videoForm.get('youtube_id').value + '?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';   
    this.onBlur();
  }

  onVerifyImage(){
    this.thumbnail.nativeElement.innerHTML = '<img src="' + this.videoForm.get('video_thumbnail').value + '">';
    this.onBlur();
  }

  onSubmit() {

    this.submitted = true;

    if(!this.videoForm.invalid){
      // this.getVideo();

      this.store.dispatch(new fromVideo.Add(this.getVideo()));
      // this.videoService.addVideo(this.video); //Werkt, maar wil db niet vullen met onzin.
      // this.store.dispatch(new fromNewVideo.Remove()); //Weer op null zetten nadat het succesvol is toegevoegd.
      this.utilService.openDialog("Video is succesvol toegevoegd!");      
    } else {
      return;
    }
  }

  getVideo() : Video {
    this.video = new Video(
      this.videoForm.get('youtube_id').value,
      this.videoForm.get('video_title').value,
      this.videoForm.get('video_description').value,
      this.videoForm.get('video_thumbnail').value,
      this.videoForm.get('video_genre').value,
      this.videoForm.get('video_duration').value,
      null
    );
    return this.video;
  }

  onFocus(event){
    event.target.parentElement.classList.add('focus');
  }

  //Wanneer een veld niet meer gefocussed wordt de ingevulde data dispatchen (dmv een nieuwe Video object)
  onBlur(){
    // this.store.dispatch(new fromNewVideo.Add(this.getVideo()));
    this.store.dispatch(new fromVideo.Add(this.getVideo()));
    console.log("Huidige video info is dispatched!");
  }

  get f() { return this.videoForm.controls; }
}
