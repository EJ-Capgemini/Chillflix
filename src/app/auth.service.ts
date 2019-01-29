import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './_models/user';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private utilService:UtilService, private router:Router) {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
      //hier http call maken en gehashed wachtwoord vergelijken met database.
      if (username.toLowerCase() == password.toLowerCase() && username != "") {
        let user:User = new User();
        user.username = username;
        user.password = password;

        username.toLowerCase() == 'admin' || username.toLowerCase() == 'erwin' ? user.userType = 'admin' : user.userType = 'user';

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return true;
      }
        return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.utilService.openDialog("Je bent nu uitgelogd.");
    this.router.navigate(['/']);
  }
}
