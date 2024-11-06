import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarios = [
    { email: 'user@example.com', senha: '12345', nome: 'Usuário Exemplo' },
    { email: 'admin@example.com', senha: 'admin123', nome: 'Admin' }
  ];

  constructor() { }

  login(email: string, senha: string): boolean {
    const usuario = this.usuarios.find(u => u.email === email && u.senha === senha);
    
    if (usuario) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      return true;
    }
    
    return false;
  }

  logout(): void {
    localStorage.removeItem('usuario');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('usuario') !== null;
  }

  getUsuario(): any {
    return JSON.parse(localStorage.getItem('usuario') || '{}');
  }
}
