import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { PhotosService } from 'src/app/services';
import { PhotoData } from 'src/app/services/DTO';

@Component({
  selector: 'app-favorites-screen',
  templateUrl: './favorites-screen.component.html',
  styleUrls: ['./favorites-screen.component.scss']
})
export class FavoritesScreenComponent implements OnDestroy {
  private unsubscribe$ = new Subject<void>();
  photos: PhotoData[];
  photosAmountPerLine = 3;

  constructor(private photosService: PhotosService, private router: Router) {
    this.photosService.favorites()
      .subscribe(photos => this.photos = photos)
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private navigate(photo: PhotoData) {
    this.router.navigate(['photos', photo.id]);
  }

  public onThumbnailClick(photo: PhotoData) {
    this.photosService.addFavorite(photo);
    this.navigate(photo);
  }

}
