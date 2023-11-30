import { Component } from '@angular/core';
import { OperacionService } from '../operacion.service';
import { TransferenciaService} from '../transferencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {  Credentials } from '../transferencia';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials = {
    email: '',
    password:''

 } 

  constructor(
    private transferenciaService: TransferenciaService,
    private operacionService: OperacionService,
    private router: Router
  ){}

  login(form: NgForm){
    console.log('form value', form.value)

      this.transferenciaService.login(this.creds)
        .subscribe(response => {
          this.router.navigate(['/']);
        }) 

        this.operacionService.login(this.creds)
        .subscribe(response => {
          this.router.navigate(['/']);
        }) 

  }
}
