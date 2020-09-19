import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavigationComponent } from './navigation/navigation.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { ServicesModule } from '../services/services.module';
import { AtomsModule } from '../atoms/atoms.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [NavigationComponent, PhotoAlbumComponent],
  exports: [NavigationComponent, PhotoAlbumComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgbModule,
    ServicesModule,
    AtomsModule,
    MoleculesModule,
  ],
})
export class OrganismsModule { }
