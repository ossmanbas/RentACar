import { Rental } from './../../models/rental';
import { RentalService } from '../../services/rental.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})

export class RentalComponent implements OnInit {
  rentals:Rental[] = [];
  dataLoaded = false;
  constructor(private rentalService:RentalService,private activatedRoute:ActivatedRoute) {}


  //ngOnInit Compenentimiz ilk açıldığında çalışan metodumuzdur. CTOR gibi.
  ngOnInit(): void {
   this.getRentals();


  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response => {
      this.rentals = response.data });
      this.dataLoaded = true;
    
  }
}