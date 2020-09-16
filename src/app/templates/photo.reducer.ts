import { routerRequestAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { PhotoData } from 'src/app/services/DTO';
import * as PhotoActions from './photo.actions';


export const photosFeatureKey = 'photos';

export interface State {
  photos: PhotoData[];
  favorites: PhotoData[];
  photosAmountPerLine: number;
}

export const initialState: State = {
  photos: [],
  favorites: [],
  photosAmountPerLine: 3,
};


export const reducer = createReducer(
  initialState,
  on(PhotoActions.loadPhotosSuccess, (state, action) => {
    return {
      ...state,
      photos: [...state.photos, ...action.photos]
    };
  }),
  on(PhotoActions.loadFavoritesSuccess, (state, action) => {
    return {
      ...state,
      favorites: action.photos
    };
  })
);

