import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { Routes, RouterModule } from '@angular/router';
import { HotelService } from './hotel.service';
import { AuthenticatedGuard } from 'src/app/core/authenticated.guard';

const routes: Routes = [
  {path: "hotels", component: HotelListComponent, canActivate: [AuthenticatedGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotelListComponent],
  exports: [RouterModule],
  providers: [HotelService]
})
export class HotelModule { }
