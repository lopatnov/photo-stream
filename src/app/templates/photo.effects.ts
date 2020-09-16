import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

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
    ofType(actions.openPhoto),
    mergeMap(action => {
      const photo = action.photo;
      return this.photosService.addFavorite(photo)
        .pipe(
          map(() => actions.navigate({ photo }))
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

  constructor(
    private router: Router,
    private actions$: Actions,
    private photosService: PhotosService) { }

}
