import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavLink } from '../model/nav-link';
import { SubscriberService } from '../service/subscriber.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  links:NavLink[];

  constructor(
    private subscriberService:SubscriberService,
    private router:Router
    ) { 
      this.links=[
        {linkText:"Subscriptions",link:'subscriptions'},
        {linkText:"Packages",link:'packages'},
        {linkText:"Profile",link:'profile'}        
      ];
    }

  ngOnInit() {
  }

  signOut(){
    this.subscriberService.currentSubscriber=null;
    this.router.navigateByUrl("/");
  }
}

