import { ReporteComponent } from './../../pages/reporte/reporte.component';
import { ManteniminentoComponent } from './../../pages/manteniminento/manteniminento.component';
import { FichaComponent } from './../../pages/ficha/ficha.component';
import { VerfichasComponent } from './../../pages/verfichas/verfichas.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RegistrarFichaComponent } from 'src/app/pages/registrar-ficha/registrar-ficha.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registrar', component: RegistrarFichaComponent },
    { path: 'ficha', component: VerfichasComponent },
    { path: 'ficha/:id', component: FichaComponent },
    { path: 'mantenimiento', component: ManteniminentoComponent },
    { path: 'reporte', component: ReporteComponent },
];
