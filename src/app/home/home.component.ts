import { Component, OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';
import { AuthService } from '../auth.service';
import { User } from '../_models/user';

declare var Parallax: any;
// const Parallax = require('parallax-js');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  user:User;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(value => this.user = value);
  }

  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true
    });
  }

}
