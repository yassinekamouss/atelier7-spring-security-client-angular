import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <h2>Login</h2>
      <form (ngSubmit)="onLogin()">
        <div class="mb-3">
          <label>Username</label>
          <input type="text" [(ngModel)]="username" name="username" class="form-control" required>
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input type="password" [(ngModel)]="password" name="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary">Se connecter</button>
      </form>
    </div>
  `
})
export class LoginComponent {
  username = '';
  password = '';
  authService = inject(AuthService);
  router = inject(Router);

  onLogin() {
    this.authService.login({username: this.username, password: this.password}).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/employees']);
      },
      error: () => alert('Login failed')
    });
  }
}