import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackagesListComponent } from './packages-list/packages-list.component';
import { HomeComponent } from './home/home.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SubscriberFormComponent } from './subscriber-form/subscriber-form.component';
import { SubscriberDashboardComponent } from './subscriber-dashboard/subscriber-dashboard.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PackagesListComponent,
    HomeComponent,
    MsgBoxComponent,
    NavbarComponent,    
    SubscriberFormComponent, SubscriberDashboardComponent, SubscriptionsComponent, SubscriptionFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
