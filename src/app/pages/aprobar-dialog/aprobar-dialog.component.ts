import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-aprobar-dialog',
  templateUrl: './aprobar-dialog.component.html',
  styleUrls: ['./aprobar-dialog.component.scss']
})
export class AprobarDialogComponent implements OnInit {

  icon_check = faCheckCircle;

  constructor(
    public dialogRef: MatDialogRef<AprobarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  salir() {
    this.dialogRef.close();
  }

}
