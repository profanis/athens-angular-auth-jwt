import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/core/authenticated.guard';

import { IsAdminGuard } from './../../core/is-admin.guard';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelService } from './hotel.service';

const routes: Routes = [
  {path: "hotels", component: HotelListComponent, canActivate: [AuthenticatedGuard, IsAdminGuard]}
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
