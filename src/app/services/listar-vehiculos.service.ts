import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarVehiculosService {

  private urlBase: string = 'http://localhost:8080'

  private urlListarVehiculos : string = this.urlBase + '/vehiculos';

  constructor(public httpClient : HttpClient) { }

  getVehiculos(): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      })
    };
    return this.httpClient.get(this.urlListarVehiculos);
  }

}
