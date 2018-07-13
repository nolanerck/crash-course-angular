import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardlistComponent } from './keyboardlist.component';

describe('KeyboardlistComponent', () => {
  let component: KeyboardlistComponent;
  let fixture: ComponentFixture<KeyboardlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
