import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from '../model/subscriber';
import { SubscriberService } from '../service/subscriber.service';

@Component({
  selector: 'app-subscriber-dashboard',
  templateUrl: './subscriber-dashboard.component.html',
  styleUrls: ['./subscriber-dashboard.component.css']
})
export class SubscriberDashboardComponent implements OnInit {

  subscriber!:Subscriber|null;
  infoMsg!:string;

  constructor(
    private subscriberService:SubscriberService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit() {
    this.subscriber=this.subscriberService.currentSubscriber;

    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        if(params['msg']){
          this.infoMsg=params['msg'];
          this.subscriber=this.subscriberService.currentSubscriber;
        }
      }
    );
  }

}
