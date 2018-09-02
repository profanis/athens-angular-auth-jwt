import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  hotels$: any;

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotels$ = this.hotelService.getHotels();
  }

}
