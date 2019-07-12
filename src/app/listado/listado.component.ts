import { Component, OnInit } from '@angular/core';
import { ListarVehiculosService } from '../services/listar-vehiculos.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  private parqueos : any = [];

  constructor(private servicioListarVehiculos : ListarVehiculosService) { }

  ngOnInit() {
    this.listarVehiculos();
  }

  listarVehiculos() : any {
    this.servicioListarVehiculos.getVehiculos().subscribe((response) => {
      response.forEach((vehiculo) => {
        this.parqueos.push(vehiculo);
      });
    });
    console.log(this.parqueos);
  }

}
