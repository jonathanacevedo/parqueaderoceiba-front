import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Debe mostrar titulo de la aplicacion', () => {
    page.navigateTo();
    expect(page.obtenerTextDelTitulo()).toEqual('Parqueadero Ceiba');
  });

  it('Validar Ingreso de Placa del Vehiculo', () => {
    element(page.obtenerCampoPlaca().sendKeys(''));
    element(by.buttonText('Ingresar Vehiculo')).click();

    browser.sleep(2000);
    expect(element(by.css('#swal2-content')).getText()).toEqual('Ingrese la placa del vehiculo');
    element(by.buttonText('OK')).click(); 
  });

  it('Validar Ingreso del tipo del Vehiculo', () => {
    element(page.obtenerCampoPlaca().sendKeys('YUD14E'));
    element(page.obtenerCampoTipo().sendKeys('Tipo'));
    element(by.buttonText('Ingresar Vehiculo')).click();
    browser.sleep(2000);
    expect(element(by.css('#swal2-content')).getText()).toEqual('Ingrese el tipo del vehiculo');
    element(by.buttonText('OK')).click(); 
  });

  it('Ingresar Vehiculo Carro', () => {
    element(page.obtenerCampoPlaca().clear());
    element(page.obtenerCampoPlaca().sendKeys('BCD456'));
    element(page.obtenerCampoTipo().sendKeys('Carro'));
    element(by.buttonText('Ingresar Vehiculo')).click();

    var parqueos = element.all(by.id('parqueos')).all(by.css('th'));
    var parqueo = parqueos.get(0);
    expect(parqueo.getText()).toEqual('BCD456');
  });

  it('Ingresar Vehiculo Moto', () => {
    element(page.obtenerCampoPlaca().sendKeys('KDY85E'));
    element(page.obtenerCampoTipo().sendKeys('Moto'));
    element(page.obtenerCampoCilindraje().sendKeys('150'));
    element(by.buttonText('Ingresar Vehiculo')).click();

    var parqueos = element.all(by.id('parqueos')).all(by.css('th'));
    var parqueo = parqueos.get(1);
  
    expect(parqueo.getText()).toEqual('KDY85E');
  });

  it('Retirar Vehiculo Carro Correctamente', () => {

    var botonesRetirar = element.all(by.id('parqueos')).all(by.buttonText('Retirar'));
    botonesRetirar.get(0).click();

    browser.sleep(2000);

    expect(element(by.css('#swal2-title')).getText()).toEqual('Correcto');

    browser.sleep(2000);
    element(by.buttonText('OK')).click();   

  });
  
  it('Verificar Retiro del Vehiculo Carro', () => {

    var parqueos = element.all(by.id('parqueos')).all(by.css('th'));
    var parqueo = parqueos.get(0);

    expect(parqueo.getText()).toEqual('KDY85E');
  });

  it('Ingresar Otro Vehiculo Moto', () => {
    element(page.obtenerCampoPlaca().sendKeys('DWA100'));
    element(page.obtenerCampoTipo().sendKeys('Moto'));
    element(page.obtenerCampoCilindraje().sendKeys('100'));
    element(by.buttonText('Ingresar Vehiculo')).click();    

    var parqueos = element.all(by.id('parqueos')).all(by.css('th'));
    var parqueo = parqueos.get(1);
  
    expect(parqueo.getText()).toEqual('DWA100');
  });


 it('Ingresar Vehiculo Moto Cilindraje 660', () => {
    element(page.obtenerCampoPlaca().sendKeys('IEU103'));
    element(page.obtenerCampoTipo().sendKeys('Moto'));
    element(page.obtenerCampoCilindraje().sendKeys('660'));
    element(by.buttonText('Ingresar Vehiculo')).click();    

    var parqueos = element.all(by.id('parqueos')).all(by.css('th'));
    var parqueo = parqueos.get(2);
  
    expect(parqueo.getText()).toEqual('IEU103');
  });

  it('Validar Existencia previa del Vehiculo', () => {
    element(page.obtenerCampoPlaca().sendKeys('IEU103'));
    element(page.obtenerCampoTipo().sendKeys('Moto'));
    element(by.buttonText('Ingresar Vehiculo')).click();
    browser.sleep(2000);
    expect(element(by.css('#swal2-content')).getText()).toEqual('El vehiculo ya existe en el sistema');
    element(by.buttonText('OK')).click(); 
  });

  it('Validar No Cupo para más de 10 Vehiculos Motos', () => {
    element(page.obtenerCampoPlaca().clear());
    
    for (let index = 0; index < 8; index++) {
      var placaVehiculo = 'KKJ23'+index;
      element(page.obtenerCampoPlaca().sendKeys(placaVehiculo));
      element(page.obtenerCampoTipo().sendKeys('Moto'));
      element(page.obtenerCampoCilindraje().sendKeys('150'));

      element(by.buttonText('Ingresar Vehiculo')).click();

    }

    browser.sleep(2000);
   
    expect(element(by.css('#swal2-content')).getText()).toEqual('No hay cupo disponible para el Vehiculo');
    element(by.buttonText('OK')).click(); 
  });

  it('Validar No Cupo para más de 20 Vehiculos Carros', () => {
    element(page.obtenerCampoPlaca().clear());

    for (let index = 0; index < 21; index++) {
      var placaVehiculo = 'PYQ145'+index;
      element(page.obtenerCampoPlaca().sendKeys(placaVehiculo));
      element(page.obtenerCampoTipo().sendKeys('Carro'));

      element(by.buttonText('Ingresar Vehiculo')).click();

    }

    browser.sleep(2000);
   
    expect(element(by.css('#swal2-content')).getText()).toEqual('No hay cupo disponible para el Vehiculo');
    element(by.buttonText('OK')).click(); 
  });

  afterEach(async () => {
    browser.sleep(2000);
  });
});
