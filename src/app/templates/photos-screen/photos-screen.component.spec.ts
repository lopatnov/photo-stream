import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

import { PhotosService } from 'src/app/services';
import { PhotoData } from 'src/app/services/DTO';
import { PhotosScreenComponent } from './photos-screen.component';

describe('PhotosScreenComponent', () => {
  let component: PhotosScreenComponent;
  let fixture: ComponentFixture<PhotosScreenComponent>;
  let mockPhotosService: jasmine.SpyObj<PhotosService>;
  let router: Router;

  @Component({
    selector: 'app-photo-album'
  })
  class MockPhotoAlbum {
    @Input() line: number;
    @Input() photos: Array<PhotoData>;
    @Output() thumbnailClick = new EventEmitter<PhotoData>();
  }

  beforeEach(async(() => {
    mockPhotosService = jasmine.createSpyObj(PhotosService.name, Object.getOwnPropertyNames(PhotosService.prototype)
      .filter(x => x !== 'constructor' && PhotosService.prototype[x] instanceof Function));
    mockPhotosService.load.and.returnValue(new Subject());
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        MockPhotoAlbum,
        PhotosScreenComponent
      ],
      providers: [
        { provide: PhotosService, useValue: mockPhotosService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosScreenComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
