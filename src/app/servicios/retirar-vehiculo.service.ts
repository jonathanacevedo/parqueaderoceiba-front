import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
  HttpResponse, HttpEvent }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RetirarVehiculoService {

  private urlBase: string = 'http://localhost:8080'

  private urlListarVehiculos : string = this.urlBase + '/vehiculos';

  constructor(public httpClient : HttpClient) { }

  retirarVehiculo(placaVehiculo : string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      })
    };
    return this.httpClient.put(this.urlListarVehiculos+'/'+placaVehiculo, httpOptions);
  }
}
