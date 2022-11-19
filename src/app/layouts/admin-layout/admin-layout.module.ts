import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RegistrarFichaComponent } from 'src/app/pages/registrar-ficha/registrar-ficha.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FichaComponent } from 'src/app/pages/ficha/ficha.component';
import { ManteniminentoComponent } from 'src/app/pages/manteniminento/manteniminento.component';
import { ReporteComponent } from 'src/app/pages/reporte/reporte.component';
import { VerfichasComponent } from 'src/app/pages/verfichas/verfichas.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,

    MatStepperModule,
    MatDialogModule,
    
    FontAwesomeModule,

  ],
  declarations: [
    RegistrarFichaComponent,
    DashboardComponent,
    VerfichasComponent,
    FichaComponent,
    ManteniminentoComponent,
    ReporteComponent,
  ],
})
export class AdminLayoutModule { }
