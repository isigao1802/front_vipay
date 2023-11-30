import { TransferenciaService} from '../transferencia.service';
import { Transferencia } from '../transferencia';
import { OperacionService } from './../operacion.service';
import { Operacion } from './../operacion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-transferencia',
  templateUrl: './registrar-transferencia.component.html',
  styleUrls: ['./registrar-transferencia.component.css']
})
export class RegistrarTransferenciaComponent implements OnInit {
  idOperacion:number;
  operacion:Operacion = new Operacion();
  transferencia : Transferencia = new Transferencia();
  constructor(private transferenciaServicio: TransferenciaService, private operacionService: OperacionService, private router: Router) { }


  ngOnInit(): void {
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
  }
}