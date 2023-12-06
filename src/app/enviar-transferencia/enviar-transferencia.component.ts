import  swal  from 'sweetalert2';
import { OperacionService } from './../operacion.service';
import { Operacion } from './../operacion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transferencia } from '../transferencia';
import { TransferenciaService} from '../transferencia.service';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-enviar-transferencia',
  templateUrl: './enviar-transferencia.component.html',
  styleUrls: ['./enviar-transferencia.component.css']
})
export class EnviarTransferenciaComponent implements OnInit {

  idOperacion:number;
  operacion:Operacion = new Operacion();
  transferencia : Transferencia = new Transferencia();
  @ViewChild('nroCuentaCredito') nroCuentaCreditoField: any;
  @ViewChild('codEntidadFinanciera') codEntidadFinancieraField: any;


  readonly = true;
  constructor( private transferenciaServicio: TransferenciaService,private operacionService:OperacionService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idOperacion = this.route.snapshot.params['idOperacion'];
    this.operacionService.obtenerOperacionPorId(this.idOperacion).subscribe(dato =>{
      this.operacion = dato;
      this.transferencia.importe=this.operacion.montoDesembolso;
      this.transferencia.moneda = 'GS';
      this.transferencia.tipoDocCredito = 'CI';
      this.transferencia.apellidoCredito=this.operacion.apellidoCuentaIndividual;
      this.transferencia.nombreCredito=this.operacion.nombreCuentaIndividual;
      this.transferencia.nroDocCredito=this.operacion.nroDocumento;
      this.transferencia.nroOperacionTransferida=this.operacion.idOperacion;
    },error => console.log(error));
  }

  irAlaListaDeOperaciones(){
    this.router.navigate(['/operaciones']);
    swal('Operacion actualizada',`La Operación ${this.operacion.idOperacion} ha sido actualizado con exito`,`success`);
  }

  botonAtras(){
    this.router.navigate(['/operaciones']);
  }

  guardarTransferencia(){
    this.transferenciaServicio.registrarTransferencia(this.transferencia).subscribe(dato => {
      console.log(this.transferencia);
      this.irALaListaDeTransferencias();
    },error => console.log(error));
  }

  irALaListaDeTransferencias(){
    this.router.navigate(['/transferencias']);
    swal('Transferencia registrada',`La Transferencia ha sido registrada con exito`,`success`);
  }


  cancelar() {
    // Restablece los valores de los campos
    this.transferencia.nroCuentaCredito = '';
    this.transferencia.codEntidadFinanciera = '';

    // Restablece también el estado de validación y mensajes de error
    if (this.nroCuentaCreditoField && this.codEntidadFinancieraField) {
      this.nroCuentaCreditoField.control.reset();
      this.codEntidadFinancieraField.control.reset();
    }
  }

  onSubmit(){
    this.guardarTransferencia();
    //this.operacionService.actualizarOperacion(this.idOperacion,this.operacion).subscribe(dato => {
      //this.irAlaListaDeOperaciones();
    }//,error => console.log(error));
  }
//}