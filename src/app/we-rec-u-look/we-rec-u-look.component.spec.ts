import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeRecULookComponent } from './we-rec-u-look.component';

describe('WeRecULookComponent', () => {
  let component: WeRecULookComponent;
  let fixture: ComponentFixture<WeRecULookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeRecULookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeRecULookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
