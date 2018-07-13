import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrummerlistComponent } from './drummerlist.component';

describe('DrummerlistComponent', () => {
  let component: DrummerlistComponent;
  let fixture: ComponentFixture<DrummerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrummerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrummerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
