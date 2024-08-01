import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Subscriber } from '../model/subscriber';
import { Subscription } from '../model/subscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  private _currentSubscriber!:Subscriber|null;
  private subscribersApi: string;

  constructor(private client: HttpClient) {
    this.currentSubscriber=null;
    this.subscribersApi = `${environment.apiPath}/subscribers`;
  }

  get currentSubscriber():Subscriber|null{
    return this._currentSubscriber;
  }

  set currentSubscriber(cs:Subscriber|null){
    this._currentSubscriber=cs;
  }
  
  getById(id:number):Observable<Subscriber>{
    return this.client.get<Subscriber>(`${this.subscribersApi}/${id}`);
  }

  getByMobileNumber(mobileNumber:string):Observable<Subscriber>{
    return this.client.get<Subscriber>(`${this.subscribersApi}/${mobileNumber}`);
  }

  getSubscriptionsBySubscriberId(id:number):Observable<Subscription[]>{
    return this.client.get<Subscription[]>(`${this.subscribersApi}/${id}/subscriptions`);
  }

  createSubscriber(subscriber:Subscriber):Observable<Subscriber>{
    return this.client.post<Subscriber>(this.subscribersApi,subscriber);
  }

  modifySubscriber(subscriber:Subscriber):Observable<Subscriber>{
    return this.client.put<Subscriber>(`${this.subscribersApi}/${subscriber.subscriberId}`,subscriber);
  }
}
