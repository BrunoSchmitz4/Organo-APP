import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (this.authService.login(this.email, this.senha)) {
      this.router.navigate(['/painel']);
    } else {
      this.erro = 'E-mail ou senha inválidos!';
    }
  }
}
