import { Injectable } from '@angular/core';
import { PhotoData } from './DTO';

@Injectable({
  providedIn: 'root'
})
export class DataConverterService {
  photoId2Url(photoId: string): string {
    return decodeURIComponent(photoId);
  }

  url2PhotoId(url: string): string {
    return encodeURIComponent(url);
  }

  serialize(obj: any) {
    return JSON.stringify(obj);
  }

  deserialize(str: string) {
    return JSON.parse(str);
  }
}
