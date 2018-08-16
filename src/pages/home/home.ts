import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public geolocation: Geolocation,
              public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {
      
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
  
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.addMarker(latLng, "Sua posição!", "Essa é a sua posição atual!<br><b>Latitude: </b>" + position.coords.latitude + "<br><b>Longitude:</b> " + position.coords.longitude);

    }, (error) => {
    
      // Caso ocorram erros, printa no console
      console.log(error);

      // Mostra um toast de erro
      this.toastError();

    });

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

    // REDO

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  toastError() {

    const toast = this.toastCtrl.create({
      message: 'Ops! Ocorreu um erro. Tente novamente.',
      duration: 2000
    });

    toast.present();

  }

}
