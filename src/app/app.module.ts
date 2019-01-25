import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TempComponent } from './temp/temp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoComponent } from './video/video.component';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { SnowComponent } from './snow/snow.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './video.service';
import { TrailerComponent } from './trailer/trailer.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { ParallaxModule } from 'ngx-parallax';
import { MatDialogModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    SnowComponent,
    TrailerComponent,
    FooterComponent,
    IntroComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ParallaxModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    VideoService
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
