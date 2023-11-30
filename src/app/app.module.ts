import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTransferenciasComponent } from './lista-transferencias/lista-transferencias.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegistrarTransferenciaComponent } from './registrar-transferencia/registrar-transferencia.component';
import { FormsModule } from '@angular/forms';
import { ActualizarTransferenciaComponent } from './actualizar-transferencia/actualizar-transferencia.component';
import { TransferenciaDetallesComponent } from './transferencia-detalles/transferencia-detalles.component';
import { ListaOperacionesComponent } from './lista-operaciones/lista-operaciones.component';
import { ActualizarOperacionComponent } from './actualizar-operacion/actualizar-operacion.component';
import { EnviarTransferenciaComponent } from './enviar-transferencia/enviar-transferencia.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ListaTransferenciasComponent,
    RegistrarTransferenciaComponent,
    ActualizarTransferenciaComponent,
    TransferenciaDetallesComponent,
    ListaOperacionesComponent,
    ActualizarOperacionComponent,
    EnviarTransferenciaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ 
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }