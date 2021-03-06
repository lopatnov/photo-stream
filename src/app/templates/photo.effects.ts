import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, filter } from 'rxjs/operators';

import { PhotosService } from '../services';
import * as actions from './photo.actions';

@Injectable()
export class PhotoEffects {

  loadPhotos$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadPhotos),
    mergeMap(action => this.photosService.load(action.amount)
      .pipe(
        map(photos => actions.loadPhotosSuccess({ photos })),
        catchError(error => of(actions.loadPhotosFailure({ error })))
      ))
  ));

  photoClick$ = createEffect(() => this.actions$.pipe(
    ofType(actions.addFavoritePhoto),
    mergeMap(action => {
      const photo = action.photo;
      return this.photosService.addFavorite(photo)
        .pipe(
          map(() => actions.addFavoritePhotoSuccess()),
          catchError(error => of(actions.addFavoritePhotoFailure({ error })))
        );
    })
  ));

  navigate$ = createEffect(() => this.actions$.pipe(
    ofType(actions.navigate),
    tap(action => this.router.navigate(['photos', action.photo.id]))
  ), {
    dispatch: false
  });

  loadFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(actions.loadFavorites),
    mergeMap(() => this.photosService.favorites()
      .pipe(
        map(photos => actions.loadFavoritesSuccess({ photos })),
        catchError(error => of(actions.loadFavoritesFailure({ error })))
      ))
  ));

  selectPhoto$ = createEffect(() => this.actions$.pipe(
    ofType(routerNavigationAction),
    filter(action => action.payload.routerState.root.firstChild.routeConfig.path === 'photos/:id'),
    mergeMap(action => {
      const photoId = action.payload.routerState.root.firstChild.params.id;
      return this.photosService.getUrl(photoId)
        .pipe(map(url => actions.selectedPhoto({
          id: photoId,
          url
        })));
    })
  ));

  removeFromFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(actions.removeFromFavorites),
    mergeMap(action => this.photosService.get(action.photoId)
      .pipe(
        mergeMap(photo => this.photosService.removeFavorite(photo)
          .pipe(mergeMap(success => of(actions.removeFromFavoritesSuccess({ success }))))),
        catchError(error => of(actions.removeFromFavoritesFailure({ error })))
      ))
  ));

  navigateBack$ = createEffect(() => this.actions$.pipe(
    ofType(actions.removeFromFavoritesSuccess),
    tap(action => {
      if (action.success) {
        this.location.back();
      }
    })
  ), {
    dispatch: false
  });

  constructor(
    private router: Router,
    private location: Location,
    private actions$: Actions,
    private photosService: PhotosService) { }

}
