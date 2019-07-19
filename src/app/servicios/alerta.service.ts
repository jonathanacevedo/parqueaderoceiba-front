import { Injectable } from '@angular/core';
declare let alertify: any;

alertify.defaults = {
    // notifier defaults
    notifier: {
        position: 'top-right'
    },
};

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }
  
  success(message: string) {
    alertify.success(message, 3);
}
}
