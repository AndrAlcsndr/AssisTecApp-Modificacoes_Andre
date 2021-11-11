import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {

  }

  loginForm: FormGroup;
  isSubmitted = false;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group
      (
        {
          email: ["marcos", Validators.required],
          password: ["123", Validators.required]

        });
  }

  get formControls() {
    return this.loginForm.controls;

  }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

}
