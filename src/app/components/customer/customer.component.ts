import { Customer } from './../../models/customer';
import { CustomerService } from './../../services/customer.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})

export class CustomerComponent implements OnInit {
  customers:Customer[] = [];
  dataLoaded = false;
  constructor(private customerService:CustomerService,private activatedRoute:ActivatedRoute) {}


  //ngOnInit Compenentimiz ilk açıldığında çalışan metodumuzdur. CTOR gibi.
  ngOnInit(): void {
   this.getCustomers();


  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response => {
      this.customers = response.data });
      this.dataLoaded = true;
    
  }
}