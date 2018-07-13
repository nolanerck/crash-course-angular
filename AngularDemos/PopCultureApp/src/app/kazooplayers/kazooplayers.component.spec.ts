import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazooplayersComponent } from './kazooplayers.component';

describe('KazooplayersComponent', () => {
  let component: KazooplayersComponent;
  let fixture: ComponentFixture<KazooplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazooplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazooplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
