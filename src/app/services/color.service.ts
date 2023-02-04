import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { colorResponseModel } from '../models/colorResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = "https://localhost:44307/api/Colors/getall";
  constructor(private httpClient:HttpClient) { }


  //Observable = subscribe olunabilir hale getirmek.
  getColors():Observable<colorResponseModel>{
    return this.httpClient.get<colorResponseModel>(this.apiUrl);
  }

}