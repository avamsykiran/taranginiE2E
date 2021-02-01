
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubscriberService } from '../service/subscriber.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobileNumber:string;
  infoMsg:string;
  errMsg:string;

  constructor(
    private router:Router,
    private routerData:ActivatedRoute,
    private subscriberService:SubscriberService    
    ) { 

    }

  ngOnInit() {
    this.routerData.queryParams
    .subscribe(
      (params) =>{
        if(params.msg){
          this.infoMsg=params.msg;
        }
      }
    );
  }

  onSubmit(){
    this.subscriberService.getByMobileNumber(this.mobileNumber)
    .subscribe(
      (data) => {
        this.subscriberService.currentSubscriber=data;
        this.router.navigateByUrl("/dashboard");        
      },
      (err)=>{
        this.errMsg=err.error;
      }
    );
  }
}
