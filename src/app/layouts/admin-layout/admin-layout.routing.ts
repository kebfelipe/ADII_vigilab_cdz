import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { RegistrarFichaComponent } from 'src/app/pages/registrar-ficha/registrar-ficha.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'registrar', component: RegistrarFichaComponent }
];
