import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { first, takeUntil } from 'rxjs/operators';

import { PhotoData } from 'src/app/services/DTO';
import { PhotosService } from 'src/app/services';

@Component({
  selector: 'app-photos-screen',
  templateUrl: './photos-screen.component.html',
  styleUrls: ['./photos-screen.component.scss']
})
export class PhotosScreenComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  photosAmountPerLine = 3;
  photos: PhotoData[];

  constructor(private photosService: PhotosService, private router: Router) {
    this.photos = [];
    this.loadPhotos();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private loadPhotos() {
    const amount = Math.ceil(window.innerHeight / (window.innerWidth / this.photosAmountPerLine * 0.6) + this.photosAmountPerLine * 5);
    this.photosService.load(amount)
      .pipe(takeUntil(this.unsubscribe$), first())
      .subscribe(photos => this.photos = [...this.photos, ...photos]);
  }

  private navigate(photo: PhotoData) {
    this.router.navigate(['photos', photo.id]);
  }

  public onThumbnailClick(photo: PhotoData) {
    this.photosService.addFavorite(photo);
    this.navigate(photo);
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {
    if (window.scrollY + window.innerHeight + 50 > document.body.scrollHeight) {
      this.loadPhotos();
    }
  }
}
