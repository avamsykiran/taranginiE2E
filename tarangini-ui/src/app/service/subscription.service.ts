import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Subscription } from '../model/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private subscriptionsApi: string;
  constructor(private client: HttpClient) {
    this.subscriptionsApi = `${environment.apiPath}/subscriptions`;
  }

  createSubscription(subscription:Subscription):Observable<Subscription>{
    return this.client.post<Subscription>(this.subscriptionsApi,subscription);
  }

  getById(id:number):Observable<Subscription>{
    return this.client.get<Subscription>(`${this.subscriptionsApi}/${id}`);
  }  

  unsubscribe(id:number):Observable<Subscription>{
    return this.client.patch<Subscription>(`${this.subscriptionsApi}/${id}/unsubscribe`,null,{responseType:'json'});
  }  

  renew(id:number):Observable<Subscription>{
    return this.client.patch<Subscription>(`${this.subscriptionsApi}/${id}/renew`,null,{responseType:'json'});
  }  
}
