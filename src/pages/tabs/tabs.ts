import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { HeroesPage } from '../heroes/heroes';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = HeroesPage;

  constructor() {}

}
