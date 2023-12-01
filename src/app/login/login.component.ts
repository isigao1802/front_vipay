/*
import { Component } from '@angular/core';
import { OperacionService } from '../operacion.service';
import { TransferenciaService} from '../transferencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {  Credentials } from '../transferencia';
import { AuthService } from '../auth.service';

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
    private router: Router,
    private authService: AuthService
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
*/

// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    // Aquí debes llamar al servicio de autenticación para verificar las credenciales
    // Puedes simularlo por ahora, por ejemplo, comparando con credenciales fijas.
    const isValidUser = this.authService.login(this.username, this.password);

    if (isValidUser) {
      // Si la autenticación es exitosa, redirige a la ruta de transferencia
      this.router.navigate(['/transferencias']);
    } else {
      // Si la autenticación falla, puedes manejarlo de alguna manera (mostrar un mensaje de error, por ejemplo)
      alert("'Credenciales inválidas'");
      console.log('Credenciales inválidas');
    }
  }
}


