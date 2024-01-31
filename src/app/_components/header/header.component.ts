import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EventBusService } from 'src/app/_shared/event-bus.service';
import { AuthService } from 'src/app/_service/auth.service';
import { StorageService } from 'src/app/_service/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isAuthenticated: boolean = false;
  currentUser$: any;
  private roles: string[] = [];
  eventBusSub?: Subscription;
  /*
  showAdminBoard = false;
  showModeratorBoard = false;
  */

  constructor(
    private storage: StorageService, 
    private router: Router,
    private auth: AuthService
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

  logout(): void {
    this.auth.logout().subscribe({
      next: res => {
        console.log(res);
        this.storage.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
