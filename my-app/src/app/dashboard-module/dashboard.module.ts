import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { RouterModule, Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const dashboardRoutes = [
    { path: '', component: DashboardComponent}
];
@NgModule ({
    declarations: [DashboardComponent],
    imports: [RouterModule.forChild(dashboardRoutes), CommonModule, FormsModule]
})

export class DashboardModule {

}
