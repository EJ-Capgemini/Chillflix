import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user:User;

  constructor(private authService:AuthService){}

  ngOnInit(){
    this.authService.currentUser.subscribe(value => this.user = value);
  }

  logout(){
    this.authService.logout();
  }
}
