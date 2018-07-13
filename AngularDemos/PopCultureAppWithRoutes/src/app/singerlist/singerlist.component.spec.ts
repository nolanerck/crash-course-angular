import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingerlistComponent } from './singerlist.component';

describe('SingerlistComponent', () => {
  let component: SingerlistComponent;
  let fixture: ComponentFixture<SingerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
