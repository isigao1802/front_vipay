import { TransferenciaDetallesComponent } from './transferencia-detalles/transferencia-detalles.component';
import { ActualizarTransferenciaComponent } from './actualizar-transferencia/actualizar-transferencia.component';
import { ListaTransferenciasComponent } from './lista-transferencias/lista-transferencias.component';
import { ListaOperacionesComponent } from './lista-operaciones/lista-operaciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarTransferenciaComponent } from './registrar-transferencia/registrar-transferencia.component';
import { EnviarTransferenciaComponent } from './enviar-transferencia/enviar-transferencia.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : 'operaciones',component:ListaOperacionesComponent },
  {path : 'transferencias',component:ListaTransferenciasComponent, canActivate: [AuthGuard] },
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path : 'operaciones/enviar-transferencia/:idOperacion',component : EnviarTransferenciaComponent},
  {path : 'registrar-transferencia',component : RegistrarTransferenciaComponent},
  {path : 'transferencia-detalles/:idTransferencia',component : TransferenciaDetallesComponent},
  {path : 'login',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
