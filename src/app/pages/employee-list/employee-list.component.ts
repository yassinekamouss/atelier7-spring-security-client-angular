import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../services/auth.service';
import { Employee } from '../../models/employee';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container mt-4">
      <div class="d-flex justify-content-between">
        <h2>Liste des employés</h2>
        <button class="btn btn-danger" (click)="logout()">Logout</button>
      </div>
      <a routerLink="/employee-form" class="btn btn-success my-3">Ajouter Employé</a>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Prénom</th><th>Nom</th><th>Email</th><th>Salaire</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let e of employees">
            <td>{{e.firstName}}</td>
            <td>{{e.lastName}}</td>
            <td>{{e.email}}</td>
            <td>{{e.salary}}</td>
            <td>
              <a [routerLink]="['/employee-form', e.id]" class="btn btn-sm btn-warning me-2">Edit</a>
              <button (click)="deleteEmp(e.id!)" class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `
})
export class EmployeeListComponent implements OnInit {
  employeeService = inject(EmployeeService);
  authService = inject(AuthService);
  employees: Employee[] = [];

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe(data => this.employees = data);
  }

  deleteEmp(id: number) {
    if(confirm('Êtes-vous sûr ?')) {
      this.employeeService.delete(id).subscribe(() => this.loadEmployees());
    }
  }

  logout() {
    this.authService.logout();
  }
}