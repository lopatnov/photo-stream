import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosScreenComponent } from './photos-screen/photos-screen.component';
import { FavoritesScreenComponent } from './favorites-screen/favorites-screen.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { AtomsModule } from '../atoms/atoms.module';

@NgModule({
  declarations: [PhotosScreenComponent, FavoritesScreenComponent, PhotoPageComponent],
  imports: [
    CommonModule,
    AtomsModule,
    OrganismsModule
  ],
  exports: [PhotosScreenComponent, FavoritesScreenComponent, PhotoPageComponent]
})
export class TemplatesModule { }
