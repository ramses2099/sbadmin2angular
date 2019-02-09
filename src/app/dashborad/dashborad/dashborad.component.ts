import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  constructor() {
    document.body.id='page-top';
   }

  ngOnInit() {
    document.body.className='hold-transition';
  }

}
