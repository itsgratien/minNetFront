import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfavoriteComponent } from './addfavorite.component';

describe('AddfavoriteComponent', () => {
  let component: AddfavoriteComponent;
  let fixture: ComponentFixture<AddfavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
