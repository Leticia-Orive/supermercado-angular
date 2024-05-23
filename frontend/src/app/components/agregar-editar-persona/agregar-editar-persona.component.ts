import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-agregar-editar-persona',
  templateUrl: './agregar-editar-persona.component.html',
  styleUrls: ['./agregar-editar-persona.component.css'],
})
export class AgregarEditarPersonaComponent implements OnInit {
  tipoDocumento: string[] = ['DNI', 'Libreta Civica', 'Pasaporte'];
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AgregarEditarPersonaComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
      tipoDocumento: [null],
      documento: [null],
      fechaNacimiento: [null],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  cancelar() {
    this.dialogRef.close();
  }
  addEditPersona() {
    /**Ejemplos de como se puede hacer
     * const nombre = this.form.get('nombre')?.value;
     * console.log(this.form);
    const nombre = this.form.value.nombre;*/
    const persona: Persona = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      tipoDocumento: this.form.value.tipoDocumento,
      documento: this.form.value.documento,
      fechaNacimiento: this.form.value.fechaNacimiento,
    };
    console.log(persona);
  }
}
