import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController } from '../../../node_modules/ionic-angular';
import { Placeholder } from '../../../node_modules/@angular/compiler/src/i18n/i18n_ast';

declare var mapfit;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: any;

  @ViewChild('mapfit') mapElement: ElementRef;
  
  
  constructor(public alertCtrl: AlertController) {}

  //Para abrir a pagina dos maps
  ionViewDidLoad() {
    // add api key NÃO PRECISA?
      mapfit.apikey = "PUBLIC_KEY";

      // draw map
      this.map = mapfit.MapView('mapfit', {theme: 'grayscale'}, {});
      //set zoom
      this.map.setZoom(13); 

      //set the map center
      let position = mapfit.LatLng([-22.7184561, -47.0174753]);
      this.map.setCenter(position);

      let marcador = mapfit.Marker(position);
      
      this.map.addMarker(marcador);

      let placeInfo = mapfit.PlaceInfo();
      placeInfo.setTitle('UNIFAJ');
      placeInfo.setDescription('<p>SP-340, Km 127, s/n, Jaguariúna - SP</p>');
      placeInfo.enableDirectionsButton(true)

      marcador.setPlaceInfo(placeInfo);
      

    //document.getElementById("mapfit").style.visibility = "visible";
  }

  
  openMaps(){
  }

  openAddMarker() {

    let prompt = this.alertCtrl.create({
      title: 'Para onde vamos?',
      message: 'Insira o endereço que deseja procurar:',
      inputs: [
        {
          name: 'address',
          placeholder: 'Rua Amazonas, 123, Jaguariúna - SP'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancelou: ' + data.address);            
          }
        },
        {
          text: 'Ir',
          handler: data => {
            this.addMarker(data.address);
          }
        }
      ]
      
    });

    prompt.present();

  }

  addMarker(address) {

    let marcador = mapfit.Marker();
    marcador.address = address;
    
    this.map.addMarker(marcador).then(() =>{
      this.map.setCenter(marcador.getPosition());
      this.map.setZoom(12);  

      let placeInfo = mapfit.PlaceInfo(marcador);

      console.log(placeInfo);
      //placeInfo.getPosition();

      placeInfo.setTitle('Marcador');
      placeInfo.setDescription(address);
      placeInfo.enableDirectionsButton(true)

      marcador.setPlaceInfo(placeInfo);
      
    });
  }

}
