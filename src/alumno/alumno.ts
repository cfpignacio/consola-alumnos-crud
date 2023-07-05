import { Ialumno } from './alumno.interfaces';
import fs from 'fs';

export class Alumno {
	nombre: string;
	apellido: string;
	email: string;
	telefono: string;
	activo: boolean;
	fechaIngreso: string;

	constructor(a: Ialumno) {
		this.nombre = a.nombre;
		this.apellido = a.apellido;
		this.email = a.email;
		this.telefono = a.telefono;
		this.fechaIngreso = a.fechaIngreso;
		this.activo = a.activo;
	}

	getNombre() {
		console.log(this.nombre);
	}

	public guardarAlumno = (a: Ialumno) => {
		try {
			const alumnos = this.cargarAlumnos();
			alumnos.push(a);
			const data = JSON.stringify(alumnos, null, 2);
			fs.writeFileSync('alumnos.json', data);
			console.log('Se guardo el alumno correctamente!!!');
		} catch (error) {
			console.log('No se pudo guardar el almuno!!');
		}
	};

	private cargarAlumnos = (): Ialumno[] => {
		try {
			const data = fs.readFileSync('alumnos.json', 'utf-8');
			return JSON.parse(data);
		} catch (error) {
			console.log('No se pudo abrir el archivo alumnos.json');
			return [];
		}
	};
}
