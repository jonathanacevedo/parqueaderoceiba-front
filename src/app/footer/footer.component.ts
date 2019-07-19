import { Component, OnInit } from '@angular/core';
import { ObtenerTRMService } from '../servicios/obtener-trm.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private trmLista : any = [];
  private contadorTrm: number = 0;


  constructor(public obtenerTRMService : ObtenerTRMService) { }

  ngOnInit() {
    this.obtenerTRM();
  }

  obtenerTRM(){
    this.obtenerTRMService.obtenerTRMColombia().subscribe((response) => {
      for (let trm of response) {
        this.contadorTrm++;
        trm.vigenciadesde = this.recortarFecha(trm.vigenciadesde);
        trm.vigenciahasta = this.recortarFecha(trm.vigenciahasta);
        this.trmLista.push(trm);
        if (this.contadorTrm === 10) {
          break;
        }
      }
    });
  }

  recortarFecha(fecha : string) : any {
    var fechaCortada : any;
    fechaCortada = fecha.split("T");

    return fechaCortada[0];
  }

}
