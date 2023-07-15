import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44307/api/Cars/getall";
  constructor(private httpClient:HttpClient) { }


  //Observable = subscribe olunabilir hale getirmek.
  getCars():Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl);
  }

}
