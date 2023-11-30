import { TransferenciaDetallesComponent } from './transferencia-detalles/transferencia-detalles.component';
import { ActualizarTransferenciaComponent } from './actualizar-transferencia/actualizar-transferencia.component';
import { ListaTransferenciasComponent } from './lista-transferencias/lista-transferencias.component';
import { ListaOperacionesComponent } from './lista-operaciones/lista-operaciones.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarTransferenciaComponent } from './registrar-transferencia/registrar-transferencia.component';
import { ActualizarOperacionComponent } from './actualizar-operacion/actualizar-operacion.component';
import { EnviarTransferenciaComponent } from './enviar-transferencia/enviar-transferencia.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'operaciones',component:ListaOperacionesComponent},
  {path : 'transferencias',component:ListaTransferenciasComponent},
  {path:'',redirectTo:'transferencias',pathMatch:'full'},
  {path : 'operaciones/enviar-transferencia/:idOperacion',component : EnviarTransferenciaComponent},
  {path : 'registrar-transferencia',component : RegistrarTransferenciaComponent},
  {path : 'actualizar-transferencia/:nroCuenta',component : ActualizarTransferenciaComponent},
  {path : 'transferencia-detalles/:nroCuenta',component : TransferenciaDetallesComponent},
  {path : 'login',component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }