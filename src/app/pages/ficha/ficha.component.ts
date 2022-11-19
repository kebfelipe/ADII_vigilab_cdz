import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AprobarDialogComponent } from '../aprobar-dialog/aprobar-dialog.component';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss']
})
export class FichaComponent implements OnInit {

  fecha = new Date();
  fecha_dia = this.fecha.getDate();
  fecha_mes = this.fecha.getMonth() + 1;
  fecha_anio = this.fecha.getFullYear();


  ficha = {
    general: {
      dengue: true,
      chingu: false,
      zika: false,
    },
    ubicacion: {
      area: { nombre: "Chimaltenango", id: 3 },
      distrito: { nombre: "Hospital Chimaltenango", id: 1 },
      servicio: { nombre: "Encamamiento de Hombres", id: 1 },
      otro_check: false,
      otro: ""
    },
    paciente: {
      dpi: "208954890301",
      dpi_check: false,
      sexo: 1,
      nacimiento: "",
      otro_etnia_check: false,

    },
    clinicos: {
      sintoma: "",
      check_hospital: false,
    },
    riesgo: {
      p1: 1,
      p2: 2,
      p3: 1,
      p4: 2,
      p5: 1,
      p6: 2,
      p7: 1,
      p8: 2,
      p9: 1,
      p10: 2,
      p11: 2,
    },
    lab: {
      check_lab: false
    },
    resultado: {
      suero: false,
      orina: false,
      igm: {
        si: 0,
        pos: 0
      },
      ns1: {
        si: 0,
        pos: 0
      },
      rt: {
        si: 0,
        pos: 0
      },
      dv: 0,
      dc: 0,
      dz: 0
    },
    final: {
      p1: {
        dengue: false,
        chingu: false,
        zika: false,
      },
      p2: 0,
      p3: 0
    }
  }

  area_salud: any[] = [
    { nombre: "Chimaltenango", id: 3 },
    { nombre: "Alta Verapaz", id: 1 },
    { nombre: "Baja Verapaz", id: 2 },
    { nombre: "Chiquimula", id: 4 },
    { nombre: "El Progreso ", id: 5 },
    { nombre: "Escuintla", id: 6 },
    { nombre: "Guatemala Central", id: 7 },
    { nombre: "Guatemala Nor - Occidente", id: 8 },
    { nombre: "Guatemala Nor - Oriente", id: 9 },
    { nombre: "Guatemala Sur ", id: 10 },
    { nombre: "Huehuetenango", id: 11 },
    { nombre: "Ixcán", id: 12 },
    { nombre: "Izabal", id: 13 },
    { nombre: "Jalapa", id: 14 },
    { nombre: "Jutiapa", id: 15 },
    { nombre: "Petén Norte", id: 16 },
  ]

  distrito: any[] = [
    { nombre: "Hospital Chimaltenango", id: 1 },
    { nombre: "Puesto de Salud", id: 2 },
  ]

  servicios: any[] = [
    { nombre: "Encamamiento de Hombres", id: 1 },
    { nombre: "Pedriatria", id: 2 },
    { nombre: "Encamamiento de Mujeres", id: 3 },
  ]

  departamento = [
    { nombre: "Chimaltenago", id: 3 },
    { nombre: "Alta Verapaz", id: 1 },
    { nombre: "Baja Verapaz", id: 2 },
    { nombre: "Chiquimula", id: 4 },
    { nombre: "Guatemala", id: 5 },
    { nombre: "El Progreso", id: 6 },
    { nombre: "Escuintla", id: 7 },
    { nombre: "Huehuetenango", id: 8 },
    { nombre: "Izabal", id: 9 },
    { nombre: "Jalapa", id: 10 },
    { nombre: "Jutiapa", id: 11 },
    { nombre: "Petén", id: 12 },
    { nombre: "Quetzaltenango", id: 13 },
    { nombre: "Quiché", id: 14 },
    { nombre: "Retalhuleu", id: 15 },
    { nombre: "Sacatepequez", id: 16 },
    { nombre: "San Marcos", id: 17 },
    { nombre: "Santa Rosa", id: 18 },
    { nombre: "Sololá", id: 19 },
    { nombre: "Suchitepequez", id: 20 },
    { nombre: "Totonicapán", id: 21 },
    { nombre: "Zacapa", id: 22 },
  ]

  municipio = [
    { nombre: "Chimaltenango", id: 1 },
    { nombre: "Acatenango", id: 1 },
    { nombre: "El Tejar", id: 1 },
    { nombre: "Parramos", id: 1 },
    { nombre: "Patzicía", id: 1 },
    { nombre: "Patzún", id: 1 },
    { nombre: "Pochuta", id: 1 },
    { nombre: "San Andrés Itzapa", id: 1 },
    { nombre: "San José Poaquíl", id: 1 },
    { nombre: "San Juan Comalapa", id: 1 },
    { nombre: "San Martín Jilotepeque", id: 1 },
    { nombre: "Santa Apolonia", id: 1 },
    { nombre: "Santa Cruz Balanyá", id: 1 },
    { nombre: "Tecpán", id: 1 },
    { nombre: "Yepocapa", id: 1 },
    { nombre: "Zaragoza", id: 1 },
  ]

  etnias = [{ nombre: "Ladino", id: 1 },
  { nombre: "Maya", id: 1 },
  { nombre: "Xinca", id: 1 },
  { nombre: "Afrodescendiente/Creole", id: 1 },
  { nombre: "Garífuna", id: 1 },
  { nombre: "Extranjero", id: 1 },]

  constructor(private dialog: MatDialog, private router: Router) { }

  list_signossintomas: any[] = [
    { id: 0, nombre: "Fiebre", check: true },
    { id: 1, nombre: "Conjuntivitis no purulenta", check: false },
    { id: 2, nombre: "Cefalea", check: false },
    { id: 3, nombre: "Astenia", check: false },
    { id: 4, nombre: "Dolor retro -orbitario", check: false },
    { id: 5, nombre: "Anorexia", check: false },
    { id: 6, nombre: "Vómitos", check: true },
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
    { id: 19, nombre: "Tos", check: true },
    { id: 20, nombre: "Diarrea", check: true },
    { id: 21, nombre: "Dolor abdominal", check: false },
    { id: 22, nombre: "Edema en articulaciones", check: false },
    { id: 23, nombre: "Artralgias", check: false },
    { id: 24, nombre: "Artritis", check: false },
    { id: 25, nombre: "Manifestaciones neurológicas", check: false },
  ];

  ngOnInit() {

  }

  guardar() {
    this.dialog.open(AprobarDialogComponent, {
      width: '300px',
      data: {},
    }).afterClosed().subscribe(
      () => {
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
