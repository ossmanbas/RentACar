import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { brandResponseModel } from '../models/brandResponseModel';


@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44307/api/Brands/getall";
  constructor(private httpClient:HttpClient) { }


  //Observable = subscribe olunabilir hale getirmek.
  getBrands():Observable<brandResponseModel>{
    return this.httpClient.get<brandResponseModel>(this.apiUrl);
  }

}