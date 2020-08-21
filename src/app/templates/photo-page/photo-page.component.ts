import { Location } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PhotosService } from 'src/app/services';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})
export class PhotoPageComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  photoHeight: number = window.innerHeight;
  photoUrl: string;
  photoId: string;
  blockButtons: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private el: ElementRef,
    private location: Location,
    private photos: PhotosService) { }

  ngOnInit(): void {
    const el: HTMLElement = this.el.nativeElement;
    const photoWrapper = el.querySelector('.photo-wrapper');
    this.photoHeight = window.innerHeight - photoWrapper.getBoundingClientRect().top;
    this.route.paramMap
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(params => {
        this.photoId = params.get('id');
        this.photos.getUrl(this.photoId)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(url => this.photoUrl = url);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  removeFromFavorites() {
    this.blockButtons = true;
    this.photos.get(this.photoId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(photo => {
        this.photos.removeFavorite(photo)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((success) => {
            this.blockButtons = false;
            if (success) {
              this.location.back();
            }
          })
      })
  }
}
