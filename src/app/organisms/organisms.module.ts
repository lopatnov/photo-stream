import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServicesModule } from '../services/services.module';
import { AtomsModule } from '../atoms/atoms.module';

@NgModule({
  declarations: [NavigationComponent, PhotoAlbumComponent],
  exports: [NavigationComponent, PhotoAlbumComponent],
  imports: [
    AtomsModule,
    MoleculesModule,
    CommonModule,
    NgbModule,
    ServicesModule
  ],
})
export class OrganismsModule { }
