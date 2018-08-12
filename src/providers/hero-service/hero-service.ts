import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Md5 } from 'ts-md5';

@Injectable()
export class HeroServiceProvider {

  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello HeroServiceProvider Provider');
  }

  load() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      var timestamp = Number(new Date());
      var hash = Md5.hashStr(timestamp + 'PRIVATE_KEY' + 'PUBLIC_KEY');
      
      this.http.get('https://gateway.marvel.com:443/v1/public/characters?ts=' + timestamp + '&orderBy=name&limit=100&apikey=PUBLIC_KEY&hash=' + hash)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, error => {
          console.log(error);          
        });

    });

  }

  openHero(id: number) {

    return new Promise(resolve => {

      var timestamp = Number(new Date());
      var hash = Md5.hashStr(timestamp + 'PRIVATE_KEY' + 'PUBLIC_KEY');
      
      this.http.get('https://gateway.marvel.com:443/v1/public/characters/' + id + '?ts=' + timestamp + '&apikey=PUBLIC_KEY&hash=' + hash)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, error => {
          console.log(error);          
        });

    });

  }

}
