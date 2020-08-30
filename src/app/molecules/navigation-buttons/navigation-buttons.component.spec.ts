import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationExtras, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavigationButtonsComponent } from './navigation-buttons.component';

describe('NavigationButtonsComponent', () => {
  let component: NavigationButtonsComponent;
  let fixture: ComponentFixture<NavigationButtonsComponent>;
  let router: Router;
  let navigateSpy: jasmine.Spy<(commands: any[], extras?: NavigationExtras) => Promise<boolean>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      declarations: [NavigationButtonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationButtonsComponent);
    router = TestBed.get(Router);
    navigateSpy = spyOn(router, 'navigate');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
