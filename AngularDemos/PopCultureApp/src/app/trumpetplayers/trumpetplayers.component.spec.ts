import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrumpetplayersComponent } from './trumpetplayers.component';

describe('TrumpetplayersComponent', () => {
  let component: TrumpetplayersComponent;
  let fixture: ComponentFixture<TrumpetplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrumpetplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrumpetplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
