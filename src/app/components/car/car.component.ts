import { CarService } from './../../services/car.service';
import { carResponseModel } from './../../models/carResponseModel';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})

export class CarComponent implements OnInit {
 

  //CarResponseModel:carResponseModel;

  cars:Car[] = [];
  dataLoaded = false;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) {}


  //ngOnInit Compenentimiz ilk açıldığında çalışan metodumuzdur. CTOR gibi.
  ngOnInit(): void {
    console.log("init çalıştı.")
   this.getCars();

   //Activate route'a gerek varmıydı emin değilim bana burda mapping olmadığı için
   //gelen datayı tutamıyor olabilir
   //Direk birebir apiden dönen modeli burada tutmak faydalı olabilir
  //  this.activatedRoute.params.subscribe(params=>{
  //   this.carService.getCars().subscribe(data=>{this.cars = data });
  //   this.dataLoaded = true;

  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data });
      this.dataLoaded = true;
  }
}


