import { Customer } from './../models/customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44307/api/Customers/getall";
  constructor(private httpClient:HttpClient) { }


  //Observable = subscribe olunabilir hale getirmek.
  getCustomers():Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl);
  }

}