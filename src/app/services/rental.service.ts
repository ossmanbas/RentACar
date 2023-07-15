import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';



@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44307/api/Rentals/getall";
  constructor(private httpClient:HttpClient) { }


  //Observable = subscribe olunabilir hale getirmek.
  getRentals():Observable<ListResponseModel<Rental>>{
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }

}