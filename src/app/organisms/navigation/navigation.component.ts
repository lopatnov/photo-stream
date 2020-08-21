import { Component } from '@angular/core';

import { NavigationButtonsLink } from 'src/app/molecules/molecules.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public isCollapsed = true;
  public links: NavigationButtonsLink[];

  constructor() {
    this.links = [
      { title: 'Photos', path: '/' },
      { title: 'Favorites', path: '/favorites' },
    ];
  }

}
