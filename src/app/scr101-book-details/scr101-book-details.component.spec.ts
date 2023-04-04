import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCR101BookDetailsComponent } from './scr101-book-details.component';

describe('SCR101BookDetailsComponent', () => {
  let component: SCR101BookDetailsComponent;
  let fixture: ComponentFixture<SCR101BookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SCR101BookDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SCR101BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
