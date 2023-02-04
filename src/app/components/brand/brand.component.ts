import { BrandService } from './../../services/brand.service';
import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})

export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  dataLoaded = false;
  constructor(private brandService:BrandService,private activatedRoute:ActivatedRoute) {}


  //ngOnInit Compenentimiz ilk açıldığında çalışan metodumuzdur. CTOR gibi.
  ngOnInit(): void {
   this.getBrands();


  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data });
      this.dataLoaded = true;
    
  }
}