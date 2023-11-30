import  swal  from 'sweetalert2';
import { TransferenciaService } from '../transferencia.service';
import { Transferencia } from '../transferencia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-transferencia',
  templateUrl: './actualizar-transferencia.component.html',
  styleUrls: ['./actualizar-transferencia.component.css']
})
export class ActualizarTransferenciaComponent implements OnInit {

  id:number;
  transferencia:Transferencia = new Transferencia();
  constructor(private transferenciaService:TransferenciaService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.transferenciaService.obtenerTransferenciaPorId(this.id).subscribe(dato =>{
      this.transferencia = dato;
    },error => console.log(error));
  }

  irAlaListaDeTransferencias(){
    this.router.navigate(['/transferencias']);
    swal('Transferencia actualizada',`La Transferencia ${this.transferencia.idTransferencia} ha sido actualizada con exito`,`success`);
  }

  onSubmit(){
    this.transferenciaService.actualizarTransferencias(this.id,this.transferencia).subscribe(dato => {
      this.irAlaListaDeTransferencias();
    },error => console.log(error));
  }
}
