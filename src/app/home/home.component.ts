import { Component, OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';

declare var Parallax: any;
// const Parallax = require('parallax-js');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true
    });
    console.log("test");
  }

}
