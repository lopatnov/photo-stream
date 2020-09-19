import { routerNavigationAction, routerRequestAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';
import { PhotoData } from 'src/app/services/DTO';
import * as PhotoActions from './photo.actions';

export const moduleFeatureKey = 'photos';

export interface PhotoState extends PhotoData {
  blockButtons: boolean;
}

export interface State {
  photos: PhotoData[];
  favorites: PhotoData[];
  photosAmountPerLine: number;
  photo?: PhotoState;
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
  }),
  on(PhotoActions.selectedPhoto, (state, action) => {
    return {
      ...state,
      photo: {
        id: action.id,
        url: action.url,
        blockButtons: false
      }
    };
  }),
  on(PhotoActions.removeFromFavorites, (state, action) => {
    return {
      ...state,
      photo: {
        ...state.photo,
        blockButtons: true
      }
    };
  }),
  on(PhotoActions.removeFromFavoritesSuccess, PhotoActions.removeFromFavoritesFailure, (state, action) => {
    return {
      ...state,
      photo: {
        ...state.photo,
        blockButtons: false
      }
    };
  }),
);

