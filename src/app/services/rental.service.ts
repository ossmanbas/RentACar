import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { rentalResponseModel } from '../models/rentalResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44307/api/Rentals/getall";
  constructor(private httpClient:HttpClient) { }


  //Observable = subscribe olunabilir hale getirmek.
  getRentals():Observable<rentalResponseModel>{
    return this.httpClient.get<rentalResponseModel>(this.apiUrl);
  }

}