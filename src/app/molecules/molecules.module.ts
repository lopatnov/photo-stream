import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationButtonsComponent } from './navigation-buttons/navigation-buttons.component';
import { AtomsModule } from '../atoms/atoms.module';
export { NavigationButtonsLink } from './navigation-buttons/navigation-buttons.component';

@NgModule({
  declarations: [NavigationButtonsComponent],
  exports: [NavigationButtonsComponent],
  imports: [
    CommonModule,
    RouterModule,
    AtomsModule,
    NgbModule
  ]
})
export class MoleculesModule { }
