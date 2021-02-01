import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubscriberService } from './service/subscriber.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate, CanActivateChild {

  constructor(
    private subscriberService: SubscriberService,
    private router: Router) {

  }

  checkSubscriberSignedIn() {
    let isOk: boolean = this.subscriberService.currentSubscriber != null && this.subscriberService.currentSubscriber != undefined;

    if (!isOk) {
      this.router.navigateByUrl("/");
    }

    return isOk;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.checkSubscriberSignedIn();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkSubscriberSignedIn();
  }

}
