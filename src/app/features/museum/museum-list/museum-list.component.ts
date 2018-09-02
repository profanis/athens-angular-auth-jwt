import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MuseumService } from '../museum.service';

@Component({
  selector: 'app-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.css']
})
export class MuseumListComponent implements OnInit {

  museums$: Observable<any>;

  constructor(private museumService: MuseumService) { }

  ngOnInit() {
    this.museums$ = this.museumService.getMuseums();
  }

}
