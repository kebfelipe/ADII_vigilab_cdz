import { Component, OnInit } from '@angular/core';
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  icon_doctor = faUserDoctor;

  ngOnInit(): void {
  }

}
