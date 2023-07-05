import moment from 'moment';
import { Alumno } from './alumno/alumno';
import { Ialumno } from './alumno/alumno.interfaces';
import readline from 'readline';
import fs from 'fs';

console.log('Alumnos crud v0.0.1');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const formularioAlumnos = () => {
	rl.question('Ingrese el nombre del alumno: ', (nombre) => {
		rl.question('Ingrese el apellido del alumno:', (apellido) => {
			rl.question('Ingrese el email del alumno: ', (email) => {
				rl.question('Ingrese el teléfono del alumno: ', (telefono) => {
					rl.question('¿El alumno está activo? (si/no): ', (activo) => {
						const a: Ialumno = {
							nombre,
							apellido,
							email: email.toLowerCase(),
							telefono,
							activo: activo.toLowerCase() === 'si',
							fechaIngreso: moment().format('DD-MM-YYYY').toString(),
						};
						const alumno = new Alumno(a);
						alumno.guardarAlumno(alumno);
						rl.close();
					});
				});
			});
		});
	});
};

formularioAlumnos();
