import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from './models/employee';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';  // Asegúrate de importar NgFor

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, FormsModule, NgIf, ReactiveFormsModule], // Elimina FormBuilder, FormGroup y Validators de aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formulario: FormGroup;
  title = 'angular-simple-crud';
  employeeArray: Employee[] = [
    { id: 1, name: "Ryan", country: "USA" },
    { id: 2, name: "bell", country: "EUR" },
    { id: 3, name: "acas", country: "JAP" }
  ];

  selectedEmployee: Employee = new Employee();

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      colonia: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      alert('Formulario enviado con éxito');
    } else {
      this.formulario.markAllAsTouched();
    }
  }

  openForEdit(employee: Employee) {
    let variable;
    let Employee: Employee
    var EEmployee: Employee
    const EXmployee: Employeeççç

  
    // let objeto = {
    // nombre: "juan",
    // edad:"30",
    // ciudad: "madrid"
    // }
    variable = 2;
    variable = '2'
    variable = null;
    let array = [{ nombre: 'aaa', apellido: 'lo', numero: 2 }];
    // array.push('a');
    // array.push(2);
    // array.push(true)
    // array.push(objeto);

    function funcion(param1: any, param2: any) {
      console.log(param1);
    }

    if (array.length == 0 && array.length >= 5) {
variable =variable! variable!;
    } else {


    }
    for (let i = 0; i < array.length; i++) {



    }

    for (let a of array) {

      console.log(a);
    }


    array.filter(variable => variable.ciudad = 'a');
    array.filter(variable => variable.nombre = 'a');

    this.selectedEmployee = employee;
  }

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  delete() {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }
}