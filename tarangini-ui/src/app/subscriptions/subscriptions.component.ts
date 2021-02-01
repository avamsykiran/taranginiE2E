import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from '../model/subscription';
import { SubscriberService } from '../service/subscriber.service';
import { SubscriptionService } from '../service/subscription.service';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {

  subscriptions:Subscription[];
  errMsg : string;
  infoMsg:string;

  constructor(
    private subscriberService:SubscriberService,
    private subscriptionService:SubscriptionService,
    private activatedRoute:ActivatedRoute
  ) { 

  }

  ngOnInit() {
    this.loadSubscriptions();
    this.activatedRoute.queryParams.subscribe(
      (params) =>{
        if(params.infomsg){
          this.infoMsg=params.infomsg;
        }
        if(params.errmsg){
          this.errMsg=params.errmsg;
        }
      }
    );
  }

  loadSubscriptions(){
    let subscriberId = this.subscriberService.currentSubscriber.subscriberId;

    this.subscriberService.getSubscriptionsBySubscriberId(subscriberId)
    .subscribe(
      (data)=>{
        this.subscriptions=data;
      },
      (err)=>{
        this.errMsg=err.error;
      }
    );
  }

  unsubscribe(subsriptionId:number){
    this.subscriptionService.unsubscribe(subsriptionId)
    .subscribe(
      (data)=>{                
        this.loadSubscriptions();
        this.infoMsg=`${data.packageCode} is successfully closed`;
      },
      (err)=>{
        this.errMsg=err.error;
      }      
    );
  }

  renew(subsriptionId:number){
    this.subscriptionService.renew(subsriptionId)
    .subscribe(
      (data)=>{
        this.loadSubscriptions();
        this.infoMsg=`${data.packageCode} is successfully extended`;
      },
      (err)=>{
        this.errMsg=err.error;
      }      
    );
  }
}
