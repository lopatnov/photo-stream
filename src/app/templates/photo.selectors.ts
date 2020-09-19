import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as PhotoReducer from './photo.reducer';
import * as fromPhotos from './photo.reducer';

export const moduleState = createFeatureSelector<PhotoReducer.State>(fromPhotos.moduleFeatureKey);

export const $photos = createSelector(moduleState, state => state.photos);
export const $favorites = createSelector(moduleState, state => state.favorites);
export const $photosAmountPerLine = createSelector(moduleState, state => state.photosAmountPerLine);
export const $photo = createSelector(moduleState, state => state.photo);
export const $photoId = createSelector($photo, photo => photo && photo.id);
export const $photoUrl = createSelector($photo, photo => photo && photo.url);
export const $photoBlockButtons = createSelector($photo, photo => photo && photo.blockButtons);
