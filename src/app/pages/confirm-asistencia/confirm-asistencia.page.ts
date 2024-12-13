import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service'; // Cambiado al nuevo servicio

@Component({
  selector: 'app-confirmar-asistencia',
  templateUrl: './confirm-asistencia.page.html',
  styleUrls: ['./confirm-asistencia.page.scss'],
})

export class ConfirmarAsistenciaPage implements OnInit {
  
  nombreUsuario: string = '';
  institucionUsuario: string = '';

  constructor(private navCtrl: NavController, private localdbService: LocaldbService) { }

  ngOnInit() {
    // Obtener el nombre y la institución del usuario logueado
    this.nombreUsuario = this.localdbService.getNombreUsuario();
    this.institucionUsuario = this.localdbService.getInstitucionUsuario();
  }

  confirmarAsistencia() {
    const fechaActual = new Date();
    const nuevaAsistencia = {
      fecha: fechaActual.toLocaleDateString(),
      hora: fechaActual.toLocaleTimeString(),
      nombre: this.nombreUsuario, // Nombre del alumno
      institucion: this.institucionUsuario, // Institución del alumno
      curso: 'Ingeniería en Informática',
      
    };

    // Guarda la asistencia en localStorage
    this.localdbService.guardarAsistencia(nuevaAsistencia);

    // Navega de regreso a la página principal del alumno
    this.navCtrl.back();
  }

  cancelar() {
    // Regresa a la página principal sin guardar asistencia
    this.navCtrl.back();
  }
}
