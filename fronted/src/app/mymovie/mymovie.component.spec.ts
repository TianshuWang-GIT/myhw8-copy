import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymovieComponent } from './mymovie.component';

describe('MymovieComponent', () => {
  let component: MymovieComponent;
  let fixture: ComponentFixture<MymovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
