import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardHomeComponent } from './page/dashboard-home/dashboard-home.component';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES } from './page/dashboard.routing';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar'
import { MessageService } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { CookieService } from 'ngx-cookie-service';
import { ChartModule } from 'primeng/chart'



@NgModule({
  declarations: [
    DashboardHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    ToastModule,
    CardModule,
    ButtonModule,
    ToolbarModule, 
    SidebarModule,
    ChartModule,
  ],
  providers: [MessageService, CookieService],
})
export class DashboardModule { }
