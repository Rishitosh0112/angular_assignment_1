import { NgModule } from '@angular/core';
import { LoginComponent } from './login-component/login.component';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';

const loginRoutes = [
    {path: '', component: LoginComponent}
];

@NgModule({
    declarations: [LoginComponent],
    imports: [RouterModule.forChild(loginRoutes), ReactiveFormsModule, AngularFireAuthModule],
    providers: [AuthService]
})

export class LoginModule {

}
