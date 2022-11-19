import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-personas-dialog',
  templateUrl: './personas-dialog.component.html',
  styleUrls: ['./personas-dialog.component.scss']
})
export class PersonasDialogComponent implements OnInit {

  personas = [
    { no: 1, nombre: "Juan Perez", dpi: "208954890301", fecha: "12-10-2022" },
    { no: 2, nombre: "Marcos Alonso", dpi: "228954896401", fecha: "12-10-2022" },
    { no: 3, nombre: "Juan Rigoberto", dpi: "318954890302", fecha: "12-10-2022" },
    { no: 4, nombre: "Cristian Perez", dpi: "1889548960501", fecha: "12-10-2022" },
    { no: 5, nombre: "Andres Perez", dpi: "178954890608", fecha: "12-10-2022" },
  ]

  personas_2 = [
    { no: 1, nombre: "Juan Perez", dpi: "208954890301", fecha: "12-10-2022" },
    { no: 2, nombre: "Marcos Alonso", dpi: "228954896401", fecha: "12-10-2022" },
    { no: 3, nombre: "Juan Rigoberto", dpi: "318954890302", fecha: "12-10-2022" },
    { no: 4, nombre: "Cristian Perez", dpi: "1889548960501", fecha: "12-10-2022" },
    { no: 5, nombre: "Andres Perez", dpi: "178954890608", fecha: "12-10-2022" },
  ]

  constructor(
    public dialogRef: MatDialogRef<PersonasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  filtrar(event: Event) {
    const filtro = (event.target as HTMLInputElement).value;
    this.personas_2 = this.personas.filter((item) => (`${item.no} ${item.nombre} ${item.dpi}`).toLowerCase().includes(filtro.toLowerCase()));
  }

  ngOnInit(): void {
  }

}
