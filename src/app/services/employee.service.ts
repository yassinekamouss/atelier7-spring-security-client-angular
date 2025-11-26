import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/employees';
  private http = inject(HttpClient);

  getAll(): Observable<Employee[]> { return this.http.get<Employee[]>(this.apiUrl); }
  getById(id: number): Observable<Employee> { return this.http.get<Employee>(`${this.apiUrl}/${id}`); }
  create(emp: Employee): Observable<Employee> { return this.http.post<Employee>(this.apiUrl, emp); }
  update(id: number, emp: Employee): Observable<Employee> { return this.http.put<Employee>(`${this.apiUrl}/${id}`, emp); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.apiUrl}/${id}`); }
}