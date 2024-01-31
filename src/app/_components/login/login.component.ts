import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_service/auth.service';
import { StorageService } from 'src/app/_service/storage.service';

interface LoginForm {
  username: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role = '';

  loginForm = new FormGroup<LoginForm>({
    username: this.fb.nonNullable.control('', Validators.required),
    password: this.fb.nonNullable.control('', Validators.required),
  });

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private storage: StorageService
  ){}

  onSubmit(): void {
    this.auth.login(this.loginForm.value.username!, this.loginForm.value.password!).subscribe({
      next: data => {
        alert('Login successful');
        this.storage.saveUser(data);
        
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.role = this.storage.getUser().role;

        this.router.navigateByUrl('/home');
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        console.error(err);
        alert('Login failed, check the console log for details');
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
  
}
