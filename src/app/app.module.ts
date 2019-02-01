import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoComponent } from './video/video.component';
import { VideosComponent } from './videos/videos.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { SnowComponent } from './snow/snow.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoService } from './video.service';
import { TrailerComponent } from './trailer/trailer.component';
import { FooterComponent } from './footer/footer.component';
import { ParallaxModule } from 'ngx-parallax';
import { MatDialogModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './auth.service';
import { UtilService } from './util.service';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './_store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { VideoEffects } from './_store/video/video.effects';
import { IAppState } from './_store/app-state.interface';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    VideoComponent,
    VideosComponent,
    AddVideoComponent,
    SnowComponent,
    TrailerComponent,
    FooterComponent,
    DialogComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ParallaxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule,
    StoreModule.forRoot<IAppState>(rootReducer),
    EffectsModule.forRoot([VideoEffects]),
  ],
  providers: [
    VideoService,
    AuthService,
    UtilService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
