import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  errLogin () {
    console.warn('Login Fail');
    document.getElementById('login').setAttribute('_login_fail','');
    document.getElementById('senha').setAttribute('_login_fail','');
  }

  login(){

    const login = this.loginForm.get('login').value;
    const senha = this.loginForm.get('senha').value;

    this.userService.login(login, senha).subscribe(res => {
      if (res['autorizado']){
        localStorage.removeItem('currentRa');
        localStorage.removeItem('currentName');

        localStorage.setItem('currentRa', res['ra']);
        localStorage.setItem('currentName', res['nome']);

        this.router.navigate(['home']);
      } else {
        this.errLogin();
      }
    })

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

}
