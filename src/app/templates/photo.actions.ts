import { Action, createAction, createFeatureSelector, props } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

import { PhotoData } from '../services/DTO';

export enum ActionTypes {
  loadPhotos = '[Photos] Load Photos',
  loadPhotosSuccess = '[Photos] Load Photos Success',
  loadPhotosFailure = '[Photos] Load Photos Failure',
  loadFavorites = '[Photos] Load Favorites',
  loadFavoritesSuccess = '[Photos] Load Favorites Success',
  loadFavoritesFailure = '[Photos] Load Favorites Failure',
  removeFromFavorites = '[Photos] Remove From Favorites',
  removeFromFavoritesSuccess = '[Photos] Remove From Favorites Success',
  removeFromFavoritesFailure = '[Photos] Remove From Favorites Failure',
  openPhoto = '[Photos] Open photo',
  navigate = '[Photos] Navigate',
  selectedPhoto = '[Photos] Selected photo',
}

export const loadPhotos = createAction(ActionTypes.loadPhotos, props<{ amount: number }>());
export const loadPhotosSuccess = createAction(ActionTypes.loadPhotosSuccess, props<{ photos: PhotoData[] }>());
export const loadPhotosFailure = createAction(ActionTypes.loadPhotosFailure, props<{ error: any }>());
export const loadFavorites = createAction(ActionTypes.loadFavorites);
export const loadFavoritesSuccess = createAction(ActionTypes.loadFavoritesSuccess, props<{ photos: PhotoData[] }>());
export const loadFavoritesFailure = createAction(ActionTypes.loadFavoritesFailure, props<{ error: any }>());
export const removeFromFavorites = createAction(ActionTypes.removeFromFavorites, props<{ photoId: string }>());
export const removeFromFavoritesSuccess = createAction(ActionTypes.removeFromFavoritesSuccess, props<{ success: boolean }>());
export const removeFromFavoritesFailure = createAction(ActionTypes.removeFromFavoritesFailure, props<{ error: any }>());
export const openPhoto = createAction(ActionTypes.openPhoto, props<{ photo: PhotoData }>());
export const navigate = createAction(ActionTypes.navigate, props<{ photo: PhotoData }>());
export const selectedPhoto = createAction(ActionTypes.selectedPhoto, props<PhotoData>());

export interface State {
  router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectFragment,       // select the current route fragment
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);

export const idParam = selectRouteParam('id');
