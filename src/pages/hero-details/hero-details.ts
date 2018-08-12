import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HeroServiceProvider } from '../../providers/hero-service/hero-service';
import { Hero } from '../../models/hero';
import { NameServiceProvider } from '../../providers/name-service/name-service';

@IonicPage()
@Component({
  selector: 'page-hero-details',
  templateUrl: 'hero-details.html',
})
export class HeroDetailsPage {
  
  public id;
  public obj: any;
  public hero: Hero;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public heroService: HeroServiceProvider, public loadingCtrl: LoadingController,
              public nameService: NameServiceProvider) {

    this.id = navParams.get('id');

    this.hero = new Hero();

    const loader = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    loader.present();

    this.heroService.openHero(this.id)
      .then(data => {
        this.obj = data;
        console.log(this.obj);
        
        this.hero.name = this.obj.data.results[0].name;
        this.hero.thumbnail = this.obj.data.results[0].thumbnail.path + '.' + this.obj.data.results[0].thumbnail.extension;
        this.hero.description = this.obj.data.results[0].description;

        // Verifica genero do nome
        this.nameService.nameGender(this.hero.name).then(data => {
          this.obj = data;

          this.hero.gender = (this.obj.gender == 'female') ? 'Feminino' : 'Masculino';
          this.hero.scale = this.obj.scale;
          
          console.log(this.hero);
          
          loader.dismiss();
        }, error => {
          console.log(error);
          loader.dismiss();
        });

      }, error => {
        console.log(error);
        loader.dismiss();
      });
  }

  ionViewDidLoad() {

  }

}
