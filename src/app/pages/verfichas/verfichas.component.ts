import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verfichas',
  templateUrl: './verfichas.component.html',
  styleUrls: ['./verfichas.component.scss']
})
export class VerfichasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ficha = [
    { no: 1234, nombre: "Juan Perez", dpi: "208954890301", fecha: "12-10-2022" },
    { no: 1233, nombre: "Marcos Alonso", dpi: "228954896401", fecha: "12-10-2022" },
    { no: 1232, nombre: "Juan Rigoberto", dpi: "318954890302", fecha: "12-10-2022" },
    { no: 1231, nombre: "Cristian Perez", dpi: "1889548960501", fecha: "12-10-2022" },
    { no: 1230, nombre: "Andres Perez", dpi: "178954890608", fecha: "12-10-2022" },
  ]

  ficha2 = [{ no: 1234, nombre: "Juan Perez", dpi: "208954890301", fecha: "12-10-2022" },
  { no: 1233, nombre: "Marcos Alonso", dpi: "", fecha: "12-10-2022" },
  { no: 1232, nombre: "Juan Rigoberto", dpi: "318954890302", fecha: "12-10-2022" },
  { no: 1231, nombre: "Cristian Perez", dpi: "", fecha: "12-10-2022" },
  { no: 1230, nombre: "Andres Perez", dpi: "178954890608", fecha: "12-10-2022" },]

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.ficha2 = this.ficha.filter((item) => (`${item.no} ${item.nombre} ${item.dpi}`).toLowerCase().includes(filtro.toLowerCase()));
  }

  ira() {
    this.router.navigate(['ficha/1234']);
  }
}
