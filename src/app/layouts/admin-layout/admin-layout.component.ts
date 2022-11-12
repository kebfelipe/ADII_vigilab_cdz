import { Component, OnInit } from '@angular/core';
import { faEdit, faFileContract, faHouseChimneyWindow, faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  icon_home = faHouseChimneyWindow;
  icon_register = faEdit;
  icon_off = faPowerOff;
  icon_file = faFileContract;

  constructor() { }

  ngOnInit(): void {
  }

}
