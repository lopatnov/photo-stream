import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosService } from './photos.service';
export { PhotosService } from './photos.service';
import { StorageService } from './storage.service';
export { StorageService } from './storage.service';
import { DataConverterService } from './data-converter.service';
export { DataConverterService } from './data-converter.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule ],
  providers: [ PhotosService, PhotosService, DataConverterService ]
})
export class ServicesModule { }
