import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customerResponseModel } from '../models/customerResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44307/api/Customers/getall";
  constructor(private httpClient:HttpClient) { }


  //Observable = subscribe olunabilir hale getirmek.
  getCustomers():Observable<customerResponseModel>{
    return this.httpClient.get<customerResponseModel>(this.apiUrl);
  }

}