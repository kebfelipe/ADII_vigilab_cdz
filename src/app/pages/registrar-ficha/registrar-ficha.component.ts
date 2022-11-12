import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-ficha',
  templateUrl: './registrar-ficha.component.html',
  styleUrls: ['./registrar-ficha.component.scss']
})
export class RegistrarFichaComponent implements OnInit {

  constructor() { }


  dengue = false;
  chingu = false;
  zika = false;

  fecha =  new Date();
  fecha_dia = this.fecha.getDate();
  fecha_mes = this.fecha.getMonth();
  fecha_anio = this.fecha.getFullYear();

  area = 0;
  distrito = 0;


  list_signossintomas: any[] = [
    { id: 0, nombre: "Fiebre", check: false },
    { id: 1, nombre: "Conjuntivitis no purulenta", check: false },
    { id: 2, nombre: "Cefalea", check: false },
    { id: 3, nombre: "Astenia", check: false },
    { id: 4, nombre: "Dolor retro -orbitario", check: false },
    { id: 5, nombre: "Anorexia", check: false },
    { id: 6, nombre: "Vómitos", check: false },
    { id: 7, nombre: "Vómitos con sangre", check: false },
    { id: 8, nombre: "Hemorragia de encías", check: false },
    { id: 9, nombre: "Hemorragia vaginal", check: false },
    { id: 10, nombre: "Hemorragia urinaria", check: false },
    { id: 11, nombre: "Enterorragia", check: false },
    { id: 12, nombre: "Melena", check: false },
    { id: 13, nombre: "Petequias", check: false },
    { id: 14, nombre: "Epistaxis", check: false },
    { id: 15, nombre: "Mialgias", check: false },
    { id: 16, nombre: "Piel fría", check: false },
    { id: 17, nombre: "Exantema maculopar (rash)", check: false },
    { id: 18, nombre: "Sudoración", check: false },
    { id: 19, nombre: "Tos", check: false },
    { id: 20, nombre: "Diarrea", check: false },
    { id: 21, nombre: "Dolor abdominal", check: false },
    { id: 22, nombre: "Edema en articulaciones", check: false },
    { id: 23, nombre: "Artralgias", check: false },
    { id: 24, nombre: "Artritis", check: false },
    { id: 25, nombre: "Manifestaciones neurológicas", check: false },
  ];



  ngOnInit(): void {
  }

}
