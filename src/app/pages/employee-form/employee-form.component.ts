import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-4">
      <h2>{{ isEdit ? 'Modifier' : 'Ajouter' }} un employé</h2>
      <form (ngSubmit)="save()">
        <div class="mb-2">
          <label>Prénom</label>
          <input [(ngModel)]="employee.firstName" name="firstName" class="form-control" required>
        </div>
        <div class="mb-2">
          <label>Nom</label>
          <input [(ngModel)]="employee.lastName" name="lastName" class="form-control" required>
        </div>
        <div class="mb-2">
          <label>Email</label>
          <input [(ngModel)]="employee.email" name="email" class="form-control" required>
        </div>
        <div class="mb-2">
          <label>Salaire</label>
          <input type="number" [(ngModel)]="employee.salary" name="salary" class="form-control" required>
        </div>
        <button class="btn btn-primary mt-3">Sauvegarder</button>
      </form>
    </div>
  `
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { firstName: '', lastName: '', email: '', salary: 0 };
  isEdit = false;
  
  empService = inject(EmployeeService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isEdit = true;
      this.empService.getById(id).subscribe(data => this.employee = data);
    }
  }

  save() {
    if (this.isEdit) {
      this.empService.update(this.employee.id!, this.employee).subscribe(() => this.router.navigate(['/employees']));
    } else {
      this.empService.create(this.employee).subscribe(() => this.router.navigate(['/employees']));
    }
  }
}