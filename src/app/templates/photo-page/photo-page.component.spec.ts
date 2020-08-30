import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { PhotosService } from 'src/app/services';

import { PhotoPageComponent } from './photo-page.component';

describe('PhotoPageComponent', () => {
  let component: PhotoPageComponent;
  let fixture: ComponentFixture<PhotoPageComponent>;
  let photosServiceMock: jasmine.SpyObj<PhotosService>;

  beforeEach(async(() => {
    photosServiceMock = jasmine.createSpyObj('PhotosService', ['getUrl', 'get', 'removeFavorite']);
    photosServiceMock.getUrl.and.returnValue(of('#'))
    TestBed.configureTestingModule({
      declarations: [PhotoPageComponent],
      providers: [
        { provide: PhotosService, useValue: photosServiceMock },
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of({
              id: 123,
              get: () => 123
            })
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
