import { takeUntil } from 'rxjs/operators';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { PhotoData } from 'src/app/services/DTO';
import { $photos, $photosAmountPerLine } from '../photo.selectors';
import * as actions from '../photo.actions';

@Component({
  selector: 'app-photos-screen',
  templateUrl: './photos-screen.component.html',
  styleUrls: ['./photos-screen.component.scss']
})
export class PhotosScreenComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private loadBottomZone = 32;
  $photosAmountPerLine: Observable<number>;
  photosAmountPerLine = 3;
  $photos: Observable<PhotoData[]>;

  get loadPhotosAmount(): number {
    return Math.ceil(window.innerHeight / (window.innerWidth / this.photosAmountPerLine * 0.6) + this.photosAmountPerLine * 5);
  }

  constructor(private store: Store) {
    this.$photos = this.store.select($photos);
    this.$photosAmountPerLine = this.store.select($photosAmountPerLine);
    this.$photosAmountPerLine.pipe(takeUntil(this.unsubscribe$)).subscribe(n => this.photosAmountPerLine = n);
    this.loadPhotos();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private loadPhotos(): void {
    this.store.dispatch(actions.loadPhotos({
      amount: this.loadPhotosAmount
    }));
  }

  public onThumbnailClick(photo: PhotoData): void {
    this.store.dispatch(actions.openPhoto({
      photo
    }));
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(): void {
    if (window.scrollY + window.innerHeight + this.loadBottomZone > document.body.scrollHeight) {
      this.loadPhotos();
    }
  }
}
