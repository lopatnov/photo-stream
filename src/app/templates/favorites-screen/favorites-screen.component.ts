import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoData } from 'src/app/services/DTO';
import * as actions from '../photo.actions';
import { $favorites, $photosAmountPerLine } from '../photo.selectors';

@Component({
  selector: 'app-favorites-screen',
  templateUrl: './favorites-screen.component.html',
  styleUrls: ['./favorites-screen.component.scss']
})
export class FavoritesScreenComponent {
  $photos: Observable<PhotoData[]>;
  $photosAmountPerLine: Observable<number>;

  constructor(private store: Store) {
    this.$photos = this.store.select($favorites);
    this.$photosAmountPerLine = this.store.select($photosAmountPerLine);
    this.loadPhotos();
  }

  private loadPhotos(): void {
    this.store.dispatch(actions.loadFavorites());
  }

}
