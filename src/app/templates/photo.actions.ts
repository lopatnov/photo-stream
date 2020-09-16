import { Action, createAction, props } from '@ngrx/store';

import { PhotoData } from '../services/DTO';

export enum ActionTypes {
  loadPhotos = '[Photos] Load Photos',
  loadPhotosSuccess = '[Photos] Load Photos Success',
  loadPhotosFailure = '[Photos] Load Photos Failure',
  loadFavorites = '[Photos] Load Favorites',
  loadFavoritesSuccess = '[Photos] Load Favorites Success',
  loadFavoritesFailure = '[Photos] Load Favorites Failure',
  openPhoto = '[Photos] Open photo',
  navigate = '[Photos] Navigate',
}

export const loadPhotos = createAction(ActionTypes.loadPhotos, props<{ amount: number }>());
export const loadPhotosSuccess = createAction(ActionTypes.loadPhotosSuccess, props<{ photos: PhotoData[] }>());
export const loadPhotosFailure = createAction(ActionTypes.loadPhotosFailure, props<{ error: any }>());
export const loadFavorites = createAction(ActionTypes.loadFavorites);
export const loadFavoritesSuccess = createAction(ActionTypes.loadFavoritesSuccess, props<{ photos: PhotoData[] }>());
export const loadFavoritesFailure = createAction(ActionTypes.loadFavoritesFailure, props<{ error: any }>());
export const openPhoto = createAction(ActionTypes.openPhoto, props<{ photo: PhotoData }>());
export const navigate = createAction(ActionTypes.navigate, props<{ photo: PhotoData }>());
