import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})

export class CarComponent implements OnInit {
  cars:Car[] = [];
  dataLoaded = false;
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute) {}


  //ngOnInit Compenentimiz ilk açıldığında çalışan metodumuzdur. CTOR gibi.
  ngOnInit(): void {
   this.getCars();


  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data });
      this.dataLoaded = true;
    
  }
}


