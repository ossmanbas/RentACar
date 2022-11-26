import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carResponseModel } from '../models/carResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44307/api/Cars/getall";
  constructor(private httpClient:HttpClient) { }


  getCars():Observable<carResponseModel>{
    
    return this.httpClient.get<carResponseModel>(this.apiUrl);
  }

}
