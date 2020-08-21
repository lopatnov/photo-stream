import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesScreenComponent } from './templates/favorites-screen/favorites-screen.component';
import { PhotoPageComponent } from './templates/photo-page/photo-page.component';
import { PhotosScreenComponent } from './templates/photos-screen/photos-screen.component';

const routes: Routes = [
  { path: '', component: PhotosScreenComponent },
  { path: 'favorites', component: FavoritesScreenComponent },
  { path: 'photos/:id', component: PhotoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
