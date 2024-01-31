import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  utente = { 
    username: '',
    password: '' ,
    email: ''
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private location: Location,
    private authService: AuthService,
    private router: Router
  ){}

  onSubmit(): void {
    this.authService.register(this.utente.username, this.utente.email, this.utente.password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.error('Errore durante la registrazione:', err);
        alert('Errore durante la registrazione.');
      }
    });
  }
  

  goBack(): void {
    this.location.back();
  }
}
