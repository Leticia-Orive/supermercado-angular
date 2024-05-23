import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/interfaces/persona';
import { AgregarEditarPersonaComponent } from '../agregar-editar-persona/agregar-editar-persona.component';
import { MatDialog } from '@angular/material/dialog';


const listPersonas: Persona[] = [
  {
    nombre: 'Leticia',
    apellido: 'Orive',
    correo: 'lorive@gmail.com',
    tipoDocumento: 'DNI',
    documento: 74124547,
    fechaNacimiento: new Date(),
  },
  {
    nombre: 'Pablo',
    apellido: 'Perez',
    correo: 'pperez@gmail.com',
    tipoDocumento: 'DNI',
    documento: 13412547,
    fechaNacimiento: new Date(),
  },
  {
    nombre: 'Maria',
    apellido: 'Jimenez',
    correo: 'mjimenez@gmail.com',
    tipoDocumento: 'DNI',
    documento: 74722147,
    fechaNacimiento: new Date(),
  },
  {
    nombre: 'Cristian',
    apellido: 'Fernandez',
    correo: 'cfernandez@gmail.com',
    tipoDocumento: 'DNI',
    documento: 74127127,
    fechaNacimiento: new Date(),
  },
  {
    nombre: 'Nerea',
    apellido: 'Garcia',
    correo: 'ngarcia@gmail.com',
    tipoDocumento: 'DNI',
    documento: 13124487,
    fechaNacimiento: new Date(),
  },
  {
    nombre: 'David',
    apellido: 'Garcia',
    correo: 'dgarcia@gmail.com',
    tipoDocumento: 'DNI',
    documento: 13133747,
    fechaNacimiento: new Date(),
  },
];
@Component({
  selector: 'app-list-personas',
  templateUrl: './list-personas.component.html',
  styleUrls: ['./list-personas.component.css'],
})
export class ListPersonasComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'nombre',
    'apellido',
    'correo',
    'tipoDocumento',
    'documento',
    'fechaNacimiento',
    'acciones',
  ];
  
  dataSource: MatTableDataSource<Persona>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public dialog: MatDialog) {
    
    this.dataSource = new MatTableDataSource(listPersonas);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    /*Para cambiar el nombre
    this.dataSource.paginator._intl.itemsPerPageLabel = "Items por pagina"*/
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addEditPersona() {
    const dialogRef = this.dialog.open(AgregarEditarPersonaComponent, {
      width: '550px',
      //Por si en el modal pincho fuera se me cierre
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
