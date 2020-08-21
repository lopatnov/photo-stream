import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AtomsModule } from 'src/app/atoms/atoms.module';
import { OrganismsModule } from 'src/app/organisms/organisms.module';
import { PhotosService } from 'src/app/services';
import { PhotosScreenComponent } from './photos-screen.component';

describe('PhotosScreenComponent', () => {
  let component: PhotosScreenComponent;
  let fixture: ComponentFixture<PhotosScreenComponent>;
  let mockPhotosService: jasmine.SpyObj<PhotosService>;
  let mockRouter: jasmine.SpyObj<Router>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async(() => {
    mockPhotosService = jasmine.createSpyObj(PhotosService.name, Object.getOwnPropertyNames(PhotosService.prototype)
      .filter(x => x !== 'constructor' && PhotosService.prototype[x] instanceof Function));
    mockRouter = jasmine.createSpyObj(Router.name, ['navigate']);
    mockPhotosService.load.and.returnValue(new Subject());
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
      ],
      declarations: [
        { provide: PhotosService, useValue: mockPhotosService },
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        PhotosScreenComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
