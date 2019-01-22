import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TempComponent } from './temp/temp.component';
import { FormsModule } from '@angular/forms';
import { VideoComponent } from './video/video.component';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { SnowComponent } from './snow/snow.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    TempComponent,
    VideoComponent,
    VideosComponent,
    AddVideoComponent,
    SnowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
