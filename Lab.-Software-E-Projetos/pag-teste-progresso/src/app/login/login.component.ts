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
    private userService: UserService
  ) { }

  login(){
    
    const login = this.loginForm.get('login').value;
    const senha = this.loginForm.get('senha').value;

    this.userService.login(login, senha).subscribe(res => {
      console.log(res); // response do servidor
      this.router.navigate(['home']);
    })
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    })
  }

}
