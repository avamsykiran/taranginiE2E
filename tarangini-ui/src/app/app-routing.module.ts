import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardGuard } from './dashboard.guard';
import { HomeComponent } from './home/home.component';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { SubscriberDashboardComponent } from './subscriber-dashboard/subscriber-dashboard.component';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'register',pathMatch:'full',component:SubscriberFormComponent},
  {path:'dashboard',component:SubscriberDashboardComponent,children:[
    {path:'',pathMatch:'full',redirectTo:'subscriptions'},
    {path:'subscriptions',pathMatch:'full',component:SubscriptionsComponent},
    {path:'packages',pathMatch:'full',component:PackagesListComponent},
    {path:'profile',pathMatch:'full',component:SubscriberFormComponent},
    {path:'subscribe/:code',pathMatch:'full',component:SubscriptionFormComponent},
  ],canActivate:[DashboardGuard],canActivateChild:[DashboardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
