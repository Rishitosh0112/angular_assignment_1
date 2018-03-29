import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login-module/auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less', '../../app.component.less'], 
})

export class HeaderComponent implements OnInit {
    isNavbarComponent = false;
    userEmail: string = '';
    ngOnInit(): void {
        this.authService.userAuthenticated().subscribe(
            (res) => {
                if(res && res.uid) {
                    this.isNavbarComponent = true
                    this.userEmail = res.email;
                }
                console.log('com name', this.route.routerState.snapshot.url);
            }
        );
    }
    constructor(private authService: AuthService, private route: Router) {
    }
    logout() {
        this.authService.logout();
    }
}
