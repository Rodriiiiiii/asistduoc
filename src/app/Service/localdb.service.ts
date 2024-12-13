import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; // Firebase Auth

@Injectable({
  providedIn: 'root'
})
export class LocaldbService {
  constructor() { }

  initializeCredentials() {
    const users = {
      admin: { email: 'admin@admin.cl', password: 'admin', nombre: 'admin', rol: 'admin', institucion: 'Admin' },
      alumno: { email: 'rodr.carcamo@duocuc.cl', password: '1234', nombre: 'Rodrigo Carcamo', rol: 'alumno', institucion: 'DuocUC' },
      profesor: { email: 'profesor@profesor.duoc.cl', password: 'duoc', nombre: 'Luis Acevedo', rol: 'profesor', institucion: 'DuocUC' },
    };
    localStorage.setItem('users', JSON.stringify(users));
  }

  getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
  }
  
  

  


  guardarUsuario(nuevoUsuario: { nombre: string; email: string; password: string; rol: string; institucion: string }) {
    const users = this.getUsers();
    users[nuevoUsuario.email] = nuevoUsuario;
    localStorage.setItem('users', JSON.stringify(users));
  }

  initializeHistorial() {
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (loggedInUserEmail && !localStorage.getItem(`historialAsistencias_${loggedInUserEmail}`)) {
      localStorage.setItem(`historialAsistencias_${loggedInUserEmail}`, JSON.stringify([]));
    }
  }

  guardarAsistencia(asistencia: { fecha: string; hora: string; nombre: string; institucion: string; curso: string }) {
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    if (!loggedInUserEmail) return;
    const historialAsistencias = this.getHistorialAsistencias(loggedInUserEmail);
    historialAsistencias.push(asistencia);
    localStorage.setItem(`historialAsistencias_${loggedInUserEmail}`, JSON.stringify(historialAsistencias));
  }

  getHistorialAsistencias(email: string) {
    const historialAsistencias = localStorage.getItem(`historialAsistencias_${email}`);
    return historialAsistencias ? JSON.parse(historialAsistencias) : [];
  }

  getHistorialAsistenciasActual() {
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    return loggedInUserEmail ? this.getHistorialAsistencias(loggedInUserEmail) : [];
  }

  getNombreUsuario() {
    const users = this.getUsers();
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    const user = Object.keys(users).find(key => users[key].email === loggedInUserEmail);
    return user ? users[user].nombre : '';
  }

  getInstitucionUsuario() {
    const users = this.getUsers();
    const loggedInUserEmail = localStorage.getItem('loggedInUser');
    const user = Object.keys(users).find(key => users[key].email === loggedInUserEmail);
    return user ? users[user].institucion : '';
  }
  
  // Método para restablecer la contraseña
  restablecerContrasenia(email: string, nuevaContrasenia: string): string {
    const users = this.getUsers();

    // Verificar si el usuario existe
    const user = users[email];
    if (user) {
      // Actualizar la contraseña
      user.password = nuevaContrasenia;

      // Guardar los cambios en el localStorage
      localStorage.setItem('users', JSON.stringify(users));

      return 'Contraseña actualizada exitosamente';
    } else {
      return 'Usuario no encontrado';
    }
  }



}
