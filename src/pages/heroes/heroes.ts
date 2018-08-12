import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HeroServiceProvider } from '../../providers/hero-service/hero-service';

@IonicPage()
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html',
})
export class HeroesPage {
  
  public obj: any;
  public heroes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public heroService: HeroServiceProvider, public loadingCtrl: LoadingController) {
    this.getAllHeroes();
  }

  ionViewDidLoad() {

  }

  getAllHeroes() {
    
    const loader = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    loader.present();
    
    this.heroService.load()
      .then(data => {
        this.obj = data;
        this.heroes = this.obj.data.results;
        loader.dismiss();
      }, error => {
        console.log(error);
        loader.dismiss();
      });
  }

  openHero(id: number) {
    console.log('Hero ID: ' + id);
    
    // Push para a pagina de detalhes
    this.navCtrl.push("HeroDetailsPage", {
      id: id
    });
  }

}
