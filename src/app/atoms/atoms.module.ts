import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ButtonComponent } from './button/button.component';
import { PhotoComponent } from './photo/photo.component';
import { LoaderComponent } from './loader/loader.component';
import { PhotoThumbnailComponent } from './photo-thumbnail/photo-thumbnail.component';

@NgModule({
  declarations: [ButtonComponent, PhotoComponent, LoaderComponent, PhotoThumbnailComponent],
  exports: [ButtonComponent, PhotoComponent, LoaderComponent, PhotoThumbnailComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class AtomsModule { }
