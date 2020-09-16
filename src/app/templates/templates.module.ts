import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PhotosScreenComponent } from './photos-screen/photos-screen.component';
import { FavoritesScreenComponent } from './favorites-screen/favorites-screen.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { OrganismsModule } from '../organisms/organisms.module';
import { AtomsModule } from '../atoms/atoms.module';
import { PhotoEffects } from './photo.effects';
import * as fromPhotos from './photo.reducer';

@NgModule({
  declarations: [PhotosScreenComponent, FavoritesScreenComponent, PhotoPageComponent],
  imports: [
    CommonModule,
    AtomsModule,
    OrganismsModule,
    StoreModule.forFeature(fromPhotos.photosFeatureKey, fromPhotos.reducer),
    EffectsModule.forFeature([PhotoEffects])
  ],
  exports: [PhotosScreenComponent, FavoritesScreenComponent, PhotoPageComponent]
})
export class TemplatesModule { }
