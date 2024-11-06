import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  usuario: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
    
    if (!this.usuario || !this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
