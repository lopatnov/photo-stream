import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as PhotoReducer from './photo.reducer';
import * as fromPhotos from './photo.reducer';

export const getProductsState = createFeatureSelector<PhotoReducer.State>(fromPhotos.photosFeatureKey);

export const $photos = createSelector(getProductsState, state => state.photos);
export const $favorites = createSelector(getProductsState, state => state.favorites);
export const $photosAmountPerLine = createSelector(getProductsState, state => state.photosAmountPerLine);
