import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
    selector: 'app-login',
    styleUrls: ['./login.component.less'],
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    emailId = new FormControl('', [Validators.required,  Validators.email]);
    password = new FormControl('', [Validators.required]);
    user$ = this.authService.user;
    LoginForm: FormGroup = new FormGroup({
        emailId: this.emailId,
        passowrd: this.password
    });
    ngOnInit(): void {
        this.authService.logout();
    }
    constructor(private router: Router, private authService:  AuthService) {
    }
    login(): void {
       this.authService.loginWithEmail(this.emailId.value, this.password.value).subscribe(
           (res) => {
           this.router.navigate(['/dashboard']);
        },
           (err) => { alert(err); }
       );
    }
}
