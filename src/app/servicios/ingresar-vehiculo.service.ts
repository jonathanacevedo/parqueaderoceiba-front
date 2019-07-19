import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient, HttpHeaders, HttpParams,
  HttpResponse, HttpEvent
} from '@angular/common/http';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class IngresarVehiculoService {

  private urlBase: string = 'http://localhost:8080'

  private urlIngresarVehiculos: string = this.urlBase + '/vehiculos';

  constructor(private httpClient: HttpClient) { }

  ingresarVehiculo(body: string): any {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    };
    return this.httpClient.post(this.urlIngresarVehiculos, JSON.parse(body), httpOptions)
      .pipe(
        catchError((err) => {
          Swal.fire('Error', err.error.mensaje, 'error')
          return throwError(err)
        }));
  }
}