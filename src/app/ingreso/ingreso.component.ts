import { Component, OnInit } from '@angular/core';
import { IngresarVehiculoService } from '../servicios/ingresar-vehiculo.service';
import { ListadoComponent } from '../listado/listado.component';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'


@Component({
  selector: 'app-ingreso',
  providers: [ListadoComponent],
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  private placaVehiculo: any = '';
  private tipoVehiculo: any = 'Tipo';
  private cilindrajeVehiculo: any = '';
  constructor(public ingresarVehiculoService: IngresarVehiculoService,
              public router : Router) { }

  ngOnInit() {
  }

  ingresarVehiculo() {

    if(this.placaVehiculo === ''){
      Swal.fire('Error', "Ingrese la placa del vehiculo", 'error');
      return;
    }

    if(this.tipoVehiculo === 'Tipo'){
      Swal.fire('Error', "Ingrese el tipo del vehiculo", 'error');
      return;
    }

    let bodySolicitud = {
      "placa": this.placaVehiculo,
      "cilindraje": this.cilindrajeVehiculo,
      "tipo": this.tipoVehiculo
    };

    this.ingresarVehiculoService.ingresarVehiculo(JSON.stringify(bodySolicitud))
      .subscribe((response) => {
        this.refrescarVista();
      });
  }

  refrescarVista(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/inicio"]));
  }

  limpiarCampos() {
    this.placaVehiculo = '';
    this.tipoVehiculo = 'Tipo';
    this.cilindrajeVehiculo = '';
  }

}
