import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-asistencia',
  templateUrl: './ver-asistencia.page.html',
  styleUrls: ['./ver-asistencia.page.scss'],
})
export class VerAsistenciaPage implements OnInit {
  asistenciasPorAsignatura = [
    {
      nombre: 'Programación de Aplicaciones Móviles',
      registros: [
        { fecha: '2024-08-14', estado: 'Presente' },
        { fecha: '2024-08-22', estado: 'Justificado' },
        { fecha: '2024-08-25', estado: 'Presente' },
        { fecha: '2024-08-26', estado: 'Presente' }
      ]
    },
    {
      nombre: 'Calidad de software',
      registros: [
        { fecha: '2024-09-01', estado: 'Presente' },
        { fecha: '2024-09-02', estado: 'Ausente' },
        { fecha: '2024-09-03', estado: 'Presente' },
        { fecha: '2024-09-04', estado: 'Ausente' },
        { fecha: '2024-09-05', estado: 'Presente' },
        { fecha: '2024-09-06', estado: 'Presente' }
      ]
    },
    {
      nombre: 'Arquitectura de software',
      registros: [
        { fecha: '2024-09-20', estado: 'Presente' },
        { fecha: '2024-09-01', estado: 'Presente' },
        { fecha: '2024-09-02', estado: 'Ausente' },
        { fecha: '2024-09-03', estado: 'Presente' },
        { fecha: '2024-09-04', estado: 'Ausente' },
        { fecha: '2024-09-05', estado: 'Presente' },
        { fecha: '2024-09-06', estado: 'Presente' }
      ]
    },
    {
      nombre: 'Ingles',
      registros: [
        { fecha: '2024-09-22', estado: 'Presente' },
        { fecha: '2024-09-01', estado: 'Presente' },
        { fecha: '2024-09-02', estado: 'Ausente' },
        { fecha: '2024-09-03', estado: 'Presente' },
        { fecha: '2024-09-04', estado: 'Ausente' },
        { fecha: '2024-09-05', estado: 'Presente' },
        { fecha: '2024-09-06', estado: 'Presente' }
      ]
    },
    {
      nombre: 'Etica',
      registros: [
        { fecha: '2024-09-24', estado: 'Presente' },
        { fecha: '2024-09-01', estado: 'Presente' },
        { fecha: '2024-09-02', estado: 'Ausente' },
        { fecha: '2024-09-03', estado: 'Presente' },
        { fecha: '2024-09-04', estado: 'Ausente' },
        { fecha: '2024-09-05', estado: 'Presente' },
        { fecha: '2024-09-06', estado: 'Presente' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
