import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44307/api/";
  constructor(private httpClient:HttpClient) { }


  //Observable = subscribe olunabilir hale getirmek.
  getCars():Observable<ListResponseModel<Car>> {
    let Path = this.apiUrl + "Cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(Path);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>> {
    let Path = this.apiUrl + "Cars/getbybrand?id="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(Path);
  }

}
