import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface NavigationButtonsLink {
  title: string;
  path: string;
}

@Component({
  selector: 'app-navigation-buttons',
  templateUrl: './navigation-buttons.component.html',
  styleUrls: ['./navigation-buttons.component.scss']
})
export class NavigationButtonsComponent {
  @Input() links: NavigationButtonsLink[];

  public defaultId = 'main';

  constructor(public router: Router) {}

}
