import { Store } from '@ngrx/store';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import * as actions from '../photo.actions';
import * as selectors from '../photo.selectors';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})
export class PhotoPageComponent implements OnInit {
  photoHeight: number = window.innerHeight;
  $photoUrl: Observable<string>;
  $photoId: Observable<string>;
  $blockButtons: Observable<boolean>;

  constructor(
    private store: Store,
    private el: ElementRef) { }

  ngOnInit(): void {
    const el: HTMLElement = this.el.nativeElement;
    const photoWrapper = el.querySelector('.photo-wrapper');
    this.photoHeight = window.innerHeight - photoWrapper.getBoundingClientRect().top;
    this.$photoId = this.store.select(selectors.$photoId);
    this.$photoUrl = this.store.select(selectors.$photoUrl);
    this.$blockButtons = this.store.select(selectors.$photoBlockButtons);
  }

  removeFromFavorites(): void {
    this.$photoId.pipe(first()).subscribe(photoId => {
      this.store.dispatch(actions.removeFromFavorites({
        photoId
      }));
    });
  }
}
