import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { NoPageFoundComponent } from '../no-page-found/no-page-found.component'


export const routes = [
    { path: 'login', loadChildren: '../login-module/login.module#LoginModule' },
    { path: 'dashboard', canActivate: [AuthGuardService], loadChildren: '../dashboard-module/dashboard.module#DashboardModule'},
    { path: 'noPageFound', component: NoPageFoundComponent},
    { path: '', redirectTo: 'noPageFound', pathMatch: 'prefix'},
    { path: '**', redirectTo: 'noPageFound', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {

}
