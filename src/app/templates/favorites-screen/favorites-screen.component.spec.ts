import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { PhotosService } from 'src/app/services';
import { FavoritesScreenComponent } from './favorites-screen.component';

describe('FavoritesScreenComponent', () => {
  let component: FavoritesScreenComponent;
  let fixture: ComponentFixture<FavoritesScreenComponent>;
  let photosServiceMock: jasmine.SpyObj<PhotosService>;
  let router: Router;

  beforeEach(async(() => {
    photosServiceMock = jasmine.createSpyObj('PhotosService', ['getUrl', 'get', 'removeFavorite', 'favorites']);
    photosServiceMock.favorites.and.returnValue(of([]));
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        { provide: PhotosService, useValue: photosServiceMock },
      ],
      declarations: [ FavoritesScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesScreenComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
