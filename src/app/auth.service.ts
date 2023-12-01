// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;

  // Método para verificar las credenciales del usuario
  login(username: string, password: string): boolean {
    // Aquí puedes implementar la lógica de autenticación real
    // Por ahora, simularemos la autenticación con credenciales fijas.
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  // Método para verificar si el usuario está autenticado
  isAuthenticatedFun(): boolean {
    return this.isAuthenticated;
  }

  // Otros métodos de autenticación, como cerrar sesión, etc.
}




