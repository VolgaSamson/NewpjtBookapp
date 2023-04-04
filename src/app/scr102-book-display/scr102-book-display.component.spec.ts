import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scr102BookDisplayComponent } from './scr102-book-display.component';

describe('Scr102BookDisplayComponent', () => {
  let component: Scr102BookDisplayComponent;
  let fixture: ComponentFixture<Scr102BookDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scr102BookDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Scr102BookDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
