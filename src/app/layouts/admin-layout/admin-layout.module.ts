import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { RegistrarFichaComponent } from 'src/app/pages/registrar-ficha/registrar-ficha.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';

import { MatStepperModule } from '@angular/material/stepper';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

    FontAwesomeModule,

  ],
  declarations: [
    RegistrarFichaComponent,
    DashboardComponent,
  ],
})
export class AdminLayoutModule { }
