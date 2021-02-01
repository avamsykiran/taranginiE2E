import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from '../model/subscription';
import { PackageService } from '../service/package.service';
import { SubscriberService } from '../service/subscriber.service';
import { SubscriptionService } from '../service/subscription.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  subscription: Subscription;
  monthlyRent:number;
  today:Date;

  constructor(
    private packageService: PackageService,
    private subscriberService: SubscriberService,
    private subscriptionService: SubscriptionService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {

  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(
      (params) => {
        let packageCode = params.code;

        this.packageService.getByCode(packageCode).subscribe(
          (pkg) => {
            this.today = new Date();
            this.monthlyRent=pkg.monthlyRent;
            this.subscription = {
              subscriptionId:0,
              subscriberId: this.subscriberService.currentSubscriber.subscriberId,
              dateValidFrom: this.today,
              dateValidTo: new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate()),
              fee:pkg.monthlyRent,
              description:pkg.description,
              packageCode:pkg.packageCode,
              term:"MONTHLY",
              status:'ACTIVE',
              packageTitle:pkg.title
            };
          }
        );
      }
    );
  }

  changeTerm(term:string){
    this.subscription.term=term;
    if("MONTHLY"===term){
      this.subscription.dateValidTo=new Date(this.today.getFullYear(), this.today.getMonth() + 1, this.today.getDate()),
      this.subscription.fee=this.monthlyRent;
    }else{
      this.subscription.dateValidTo=new Date(this.today.getFullYear()+1, this.today.getMonth() , this.today.getDate()),
      this.subscription.fee=this.monthlyRent*12;
    }
  }

  createSubscription(){
    this.subscriptionService.createSubscription(this.subscription)
    .subscribe(
      (data)=>{
        this.router.navigate(['/dashboard/subscriptions'],{queryParams:{infomsg:`Package#${data.packageTitle} subscribed successfully with subscription id ${data.subscriptionId}}`}})
      },
      (err)=>{
        this.router.navigate(['/dashboard/subscriptions'],{queryParams:{errmsg:err.error}});
      }
    );    
  }
}
