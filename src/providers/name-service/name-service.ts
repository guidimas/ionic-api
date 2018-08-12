import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NameServiceProvider {

  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello NameServiceProvider Provider');
  }

  nameGender(name: string) {

    let fullName = name.split(' ');
    let firstName = fullName[0];
    let lastName = (fullName[1]) ? fullName : '0';

    return new Promise(resolve => {

      this.http.get('https://api.namsor.com/onomastics/api/json/gender/' + firstName + '/' + lastName)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        }, error => {
          console.log(error);          
        });

    });

  }

}
