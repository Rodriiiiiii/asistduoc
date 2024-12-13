import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LocaldbService } from '../../Service/localdb.service'; // Importa el servicio

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage {
  email: string = '';
  newPassword: string = ''; // Campo para la nueva contraseña

  constructor(
    private alertCtrl: AlertController,
    private localdbService: LocaldbService // Inyecta el servicio
  ) {}

  async sendResetLink() {
    if (this.email.trim() === '') {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Por favor, ingresa tu correo electrónico.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Verifica si el correo ingresado existe en la base de datos
    const users = this.localdbService.getUsers();
    const user = Object.values(users).find(
      (user: any) => user.email === this.email
    );

    if (!user) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'El correo ingresado no está registrado en la base de datos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    // Si el usuario existe, pedir la nueva contraseña
    const alert = await this.alertCtrl.create({
      header: 'Restablecer Contraseña',
      message: 'Ingresa tu nueva contraseña.',
      inputs: [
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'Nueva Contraseña'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            // Se llama a la función para restablecer la contraseña
            this.localdbService.restablecerContrasenia(this.email, data.newPassword);
            this.showSuccessAlert();
          }
        }
      ]
    });

    await alert.present();
  }

  async showSuccessAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Éxito',
      message: 'Tu contraseña ha sido restablecida exitosamente.',
      buttons: ['OK']
    });
    await alert.present();
  }
}
