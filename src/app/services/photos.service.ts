import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataConverterService } from './data-converter.service';
import { PhotoData } from './DTO';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  constructor(private storage: StorageService) { }

  get(photoId: string): Observable<PhotoData> {
    return this.storage.getPhotoData(photoId);
  }

  getUrl(photoId: string) {
    const photoData = this.get(photoId);
    return photoData.pipe(map(x => x.url));
  }

  favorites(): Observable<PhotoData[]> {
    return this.storage.getFavoritePhotos();
  }

  addFavorite(photo: PhotoData): Observable<boolean> {
    return this.storage.addPhoto(photo);
  }

  removeFavorite(photo: PhotoData): Observable<boolean> {
    return this.storage.removePhoto(photo.id);
  }

  load(photosAmount: number): Observable<PhotoData[]> {
    return this.storage.getRandomPhotos(photosAmount);
  }

}
