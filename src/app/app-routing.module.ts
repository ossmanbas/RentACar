import { CarComponent } from './components/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent}, // Anasayfada hiç bişey açılmazsa Car Componenti aç. path = Default açılacak sayfa.
  {path:"cars",component:CarComponent}, //path domain isminden sonra gelecek sayfa. wwww.blabla.com/cars
  {path:"cars/brand/:brandId",component:CarComponent} // : brandId aslında bizim 1 2 3 diye yolladığımız değerler. Karşılamak için : kullanıyoruz.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
