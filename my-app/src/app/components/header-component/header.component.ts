import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login-module/auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})

export class HeaderComponent implements OnInit {
    isNavbarComponent = false;
    ngOnInit(): void {
        this.authService.isAuthenticated().subscribe(
            (res) => {
                this.isNavbarComponent = res
                console.log('com name', this.route.routerState.snapshot.url);
                //  if (this.route.routerState.snapshot.url === '/login') {
                //     this.isNavbarComponent = false;
                //   } else {
                //     this.isNavbarComponent = res
                //  }
            }
        );
    }
    constructor(private authService: AuthService, private route: Router) {
        console.log('authService--->', authService);
    }
    logout() {
        this.authService.logout();
    }
}
