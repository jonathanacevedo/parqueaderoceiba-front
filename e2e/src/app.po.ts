import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    //return browser.get(browser.baseUrl) as Promise<any>;
    return browser.get('/inicio') as Promise<any>;
  }


  obtenerTextDelTitulo() {
    return element(by.css('app-inicio h2')).getText() as Promise<string>;
  }

  obtenerCampoPlaca() {
    return element(by.css('#placa'));
  }
  obtenerCampoTipo() {
    return element(by.css('#inputState'));
  } 
  
  obtenerCampoCilindraje() {
    return element(by.css('#cilindraje_input'));
  }

  obtenerPlacaListado() {
    return element(by.css('#placa_listado'));
  }


}
