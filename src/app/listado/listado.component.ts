import { Component, OnInit } from '@angular/core';
import { ListarVehiculosService } from '../servicios/listar-vehiculos.service';
import { RetirarVehiculoService } from '../servicios/retirar-vehiculo.service';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  private parqueos : any = [];

  constructor(private servicioListarVehiculos : ListarVehiculosService,
              private servicioRetirarVehiculo : RetirarVehiculoService) { }

  ngOnInit() {
    this.listarVehiculos();
  }

  listarVehiculos() : any {
    this.servicioListarVehiculos.obtenerVehiculos().subscribe((response) => {
      response.forEach((vehiculo) => {
        this.parqueos.push(vehiculo);
      });
    });
  }

  retirarVehiculo(placaVehiculo : string) {
   this.servicioRetirarVehiculo.retirarVehiculo(placaVehiculo).subscribe((response) => {
     this.parqueos = [];
     this.ngOnInit();
     Swal.fire('Correcto', "El vehiculo estuvo entre las fechas: "+response.fechaIngreso+" y "+response.fechaSalida+". El valor a pagar es de: "+response.valorAPagar+" pesos", 'success');
   });
  }
}
