import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from './film';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Video } from './video';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class VideoService {

  private videosUrl = 'http://localhost:8080/api/video';
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

  getVideoDoesNotWork(id:string){
    const url = `${this.videosUrl}/get/${id}`;

    this.http.get<Video>(url).subscribe(data => {
      return data;      
    }, error => {
      return error;
    });
  }

  addVideo(video:Video){
    const url = `${this.videosUrl}/add`;
    console.log("url: " + url);
    console.log("title:" + video.title)
    console.log(video);

    this.http.post(url, video).subscribe();//subscribe is noodzakelijk, anders wordt het niet eens uitgevoerd.
  }

  /* Voorbeelden */
  // getAll(): Observable<Array<Film>>{
  //   return this.http.get("https://swapi.co/api/films/").pipe(
  //     map(response => response['results']));
  // }

  // public getAll2() {
  //   return this.http.get<Film[]>("https://swapi.co/api/films/").pipe(
  //     map(response => response['results']));
  // }
}
