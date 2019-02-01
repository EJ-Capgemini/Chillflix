import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, delay } from 'rxjs/operators';
import { Video } from './_models/video';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class VideoService {

  private readonly videosUrl = 'http://localhost:8080/api/video';
  private readonly delay = 1000;

  video:Video;

  constructor(private http: HttpClient) { }

  getVideos(){
    const url = `${this.videosUrl}/all`;
    return this.http.get<Video[]>(url).pipe(
      map(response => response));      
  }

  getVideo(id:string){
    const url = `${this.videosUrl}/get/${id}`;
    return this.http.get<Video>(url).pipe(map(response => response));
  }

  addVideo(video:Video): Observable<Video>{
    const url = `${this.videosUrl}/add`;
    console.log("url: " + url);
    console.log("title:" + video.title)
    console.log(video);

    return this.http.post<Video>(url, video).pipe(delay(this.delay));
  }
}
