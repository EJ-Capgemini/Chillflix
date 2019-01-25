import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TempComponent } from './temp/temp.component';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { VideoComponent } from './video/video.component';
import { TrailerComponent } from './trailer/trailer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'temp', component: TempComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'nieuw', component: AddVideoComponent },
  { path: 'video/:id', component: VideoComponent },
  { path: 'trailer/:id', component: TrailerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
