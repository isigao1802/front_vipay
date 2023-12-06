import  swal  from 'sweetalert2';
import { TransferenciaService } from '../transferencia.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transferencia } from '../transferencia';

@Component({
  selector: 'app-transferencia-detalles',
  templateUrl: './transferencia-detalles.component.html',
  styleUrls: ['./transferencia-detalles.component.css']
})
export class TransferenciaDetallesComponent implements OnInit {

  id:number;
  transferencia:Transferencia;
  constructor(private route:ActivatedRoute,private transferenciaServicio:TransferenciaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idTransferencia'];
    this.transferencia = new Transferencia();
    this.transferenciaServicio.obtenerTransferenciaPorId(this.id).subscribe(dato => {
      this.transferencia = dato;
      swal(`Detalles de la Transferencia ${this.transferencia.idTransferencia}`);
    });
  }

}

