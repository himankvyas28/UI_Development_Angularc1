import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysComponent } from './displays.component';

describe('DisplaysComponent', () => {
  let component: DisplaysComponent;
  let fixture: ComponentFixture<DisplaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaysComponent]
    });
    fixture = TestBed.createComponent(DisplaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
