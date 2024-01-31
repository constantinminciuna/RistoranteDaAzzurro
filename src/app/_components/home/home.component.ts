import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';
import { StorageService } from 'src/app/_service/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  isAuthenticated: boolean = false;
  currentUser$: any;

  constructor(
    private storage: StorageService,
    private auth: AuthService,
    private router: Router
  ){
  }

  ngOnInit() {
    this.isAuthenticated = this.storage.isLoggedIn();
    this.currentUser$ = this.storage.getUser();
    
    if(this.storage.isSet()){  
      if (this.isTokenExpired(this.storage.getUser().token)) {
        this.auth.logout();
        this.router.navigate(['/login']);
      }
    }
  }

  private isTokenExpired(token: string) {
    let expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    expiry = expiry * 1000;
    if(expiry > Date.now) return true;
    else return false;
  }

}
