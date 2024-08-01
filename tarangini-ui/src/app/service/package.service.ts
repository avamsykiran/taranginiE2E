import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Package } from '../model/package';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private packagesApi:string;
  constructor(private client:HttpClient) {
    this.packagesApi=`${environment.apiPath}/packages`;
  }

  getAll():Observable<Package[]>{
    return this.client.get<Package[]>(this.packagesApi);
  }

  getByCode(code:string):Observable<Package>{
    return this.client.get<Package>(`${this.packagesApi}/${code}`);
  }
}
