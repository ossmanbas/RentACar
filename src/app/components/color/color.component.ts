import { Color } from './../../models/color';
import { ColorService } from './../../services/color.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})

export class ColorComponent implements OnInit {
  colors:Color[] = [];
  dataLoaded = false;
  constructor(private colorService:ColorService,private activatedRoute:ActivatedRoute) {}


  //ngOnInit Compenentimiz ilk açıldığında çalışan metodumuzdur. CTOR gibi.
  ngOnInit(): void {
   this.getColors();


  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data });
      this.dataLoaded = true;
    
  }
}