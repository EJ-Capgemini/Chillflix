import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UtilService } from '../util.service';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private utilService:UtilService, private router:Router) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
  }

  onSubmit() {
    if(this.authService.login(this.loginForm.get('username').value, this.loginForm.get('password').value)){
      this.utilService.openDialog("Je bent nu ingelogd!");
      this.router.navigate(['/videos']);
    } else {
      this.utilService.openDialog("Combinatie van gebruikersnaam en wachtwoord is incorrect.");
    }
  }

  onFocus(event){
    event.target.classList.add('has-val');
  }

}
