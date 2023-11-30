import  swal  from 'sweetalert2';
import { OperacionService } from './../operacion.service';
import { Operacion } from './../operacion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transferencia } from '../transferencia';
import { TransferenciaService} from '../transferencia.service';

@Component({
  selector: 'app-actualizar-operacion',
  templateUrl: './actualizar-operacion.component.html',
  styleUrls: ['./actualizar-operacion.component.css']
})
export class ActualizarOperacionComponent implements OnInit {

  idOperacion:number;
  operacion:Operacion = new Operacion();
  transferencia : Transferencia = new Transferencia();

  readonly = true;
  constructor(private transferenciaServicio: TransferenciaService,private operacionService:OperacionService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idOperacion = this.route.snapshot.params['idOperacion'];
    this.operacionService.obtenerOperacionPorId(this.idOperacion).subscribe(dato =>{
      this.operacion = dato;
    },error => console.log(error));
  }

  irAlaListaDeOperaciones(){
    this.router.navigate(['/operaciones']);
    swal('Operacion actualizada',`La Operación ${this.operacion.idOperacion} ha sido actualizado con exito`,`success`);
  }

  guardarTransferencia(){
    this.transferenciaServicio.registrarTransferencia(this.transferencia).subscribe(dato => {
      console.log(this.transferencia);
      this.irALaListaDeTransferencias();
    },error => console.log(error));
  }

  irALaListaDeTransferencias(){
    this.router.navigate(['/transferencias']);
    swal('Transferencia registrada',`La Transferencia ${this.transferencia.idTransferencia} ha sido registrada con exito`,`success`);
  }

  onSubmit(){
    this.guardarTransferencia();
    //this.operacionService.actualizarOperacion(this.idOperacion,this.operacion).subscribe(dato => {
      //this.irAlaListaDeOperaciones();
    }//,error => console.log(error));
  }
//}