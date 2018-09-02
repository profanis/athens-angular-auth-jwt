import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MuseumListComponent } from './museum-list/museum-list.component';
import { MuseumService } from './museum.service';
import { AuthenticatedGuard } from 'src/app/core/authenticated.guard';

const routes: Routes = [
  {path: "museums", component: MuseumListComponent, canActivate: [AuthenticatedGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MuseumListComponent],
  providers: [MuseumService],
  exports: [RouterModule]
})
export class MuseumModule { }
