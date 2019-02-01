import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromVideo from '../../_store/video/video.action';
import { VideoService } from 'src/app/video.service';
import { VideoActionTypes } from './video.action';
import { Video } from 'src/app/_models/video';
import { Action } from '@ngrx/store';

@Injectable()
export class VideoEffects {

  constructor(
    private readonly videoService: VideoService,
    private readonly actions$: Actions) {}

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType(VideoActionTypes.LOAD),
    mergeMap(action =>
      this.videoService.getVideos().pipe(
        // If successful, dispatch success action with result
        map((videos) => new fromVideo.LoadComplete(videos)),
        // If request fails, dispatch failed action
        catchError(() => of(new fromVideo.LoadError()))
      )
    )
  );

  @Effect()
  add$: Observable < fromVideo.AddComplete | fromVideo.AddError > = this.actions$.pipe(
    ofType < fromVideo.Add > (VideoActionTypes.ADD),
    mergeMap(action =>
      this.videoService.addVideo(action.video).pipe(
        // If successful, dispatch success action with result
        map((newVideo: Video) => new fromVideo.AddComplete(newVideo)),
        // If request fails, dispatch failed action
        catchError(() => of (new fromVideo.AddError()))
      )
    )
  ); 
}
