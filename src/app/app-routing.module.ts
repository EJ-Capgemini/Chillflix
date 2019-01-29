import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { VideoComponent } from './video/video.component';
import { TrailerComponent } from './trailer/trailer.component';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'nieuw', component: AddVideoComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'video/:id', component: VideoComponent },
  { path: 'trailer/:id', component: TrailerComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
