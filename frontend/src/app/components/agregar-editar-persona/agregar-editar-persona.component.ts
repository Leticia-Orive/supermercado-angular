import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  maxDate: Date;

  constructor(
    public dialogRef: MatDialogRef<AgregarEditarPersonaComponent>,
    private fb: FormBuilder
  ) {
    (this.maxDate = new Date()),
      (this.form = this.fb.group({
        /**Si se utilizan mas de una validacion hay que meterlas en un array como muestro debajo */
        nombre: ['', [Validators.required, Validators.maxLength(20)]],
        apellido: ['', Validators.required],
        correo: ['', , [Validators.required, Validators.email]],
        tipoDocumento: [null, Validators.required],
        documento: [
          null,
          [Validators.required, Validators.pattern('^[0-9]*$')],
        ],
        fechaNacimiento: [null, Validators.required],
      }));
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
    /**Si no quiero deshabilitar el boton puedo hacer esto*/
    if (this.form.invalid) {
      return;
    }
    const persona: Persona = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      tipoDocumento: this.form.value.tipoDocumento,
      documento: this.form.value.documento,
      fechaNacimiento: this.form.value.fechaNacimiento,
    };
    console.log(this.form);
  }
}
