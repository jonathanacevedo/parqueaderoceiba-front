import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
  HttpResponse, HttpEvent }  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObtenerTRMService {

  private urlObtenerTRM: string = 'https://www.datos.gov.co/resource/32sa-8pi3.json'


  constructor(public httpClient : HttpClient) { }

  obtenerTRMColombia(): any{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      })
    };
    return this.httpClient.get(this.urlObtenerTRM);
  }
}
