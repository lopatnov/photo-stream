import { Injectable } from '@angular/core';
import { image } from 'faker';
import { Observable, of } from 'rxjs';
import { DataConverterService } from './data-converter.service';
import { PhotoData } from './DTO';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private static photoPrefix = 'photo.';

  constructor(private converter: DataConverterService) { }

  getPhotoData(photoId: string): Observable<PhotoData> {
    return of({
      id: photoId,
      url: this.converter.photoId2Url(photoId)
    });
  }

  private randomInteger(min: number, max: number): number {
    const rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  private generatePhotoData(): PhotoData {
    const url = image.imageUrl(this.randomInteger(600, 1000), this.randomInteger(600, 1000), undefined, true);
    return {
      id: this.converter.url2PhotoId(url),
      url
    };
  }

  getRandomPhotos(photosAmount: number): Observable<PhotoData[]> {
    const photos: PhotoData[] = new Array(photosAmount);
    for (let i = 0; i < photosAmount; i++) {
      photos[i] = this.generatePhotoData();
    }
    return of(photos);
  }

  private getStoragePhotoId(id: string): string {
    return `${StorageService.photoPrefix}${id}`;
  }

  addPhoto(photo: PhotoData): Observable<boolean> {
    try {
      const photoId = this.getStoragePhotoId(photo.id);
      const serialized = this.converter.serialize(photo);
      localStorage.setItem(photoId, serialized);
      return of(true);
    }
    catch {
      return of(false);
    }
  }

  removePhoto(id: string): Observable<boolean> {
    try {
      const photoId = this.getStoragePhotoId(id);
      if (localStorage.getItem(photoId)) {
        localStorage.removeItem(photoId);
        return of(true);
      }
      return of(false);
    }
    catch {
      return of(false);
    }
  }

  getFavoritePhotos(): Observable<PhotoData[]> {
    const photos: PhotoData[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(StorageService.photoPrefix)) {
        const photo = this.converter.deserialize(localStorage.getItem(key));
        photos.push(photo);
      }
    }
    return of(photos);
  }

}
