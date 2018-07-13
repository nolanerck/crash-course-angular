import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitaristlistComponent } from './guitaristlist.component';

describe('GuitaristlistComponent', () => {
  let component: GuitaristlistComponent;
  let fixture: ComponentFixture<GuitaristlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitaristlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitaristlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
