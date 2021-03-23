import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeotherpartsComponent } from './homeotherparts.component';

describe('HomeotherpartsComponent', () => {
  let component: HomeotherpartsComponent;
  let fixture: ComponentFixture<HomeotherpartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeotherpartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeotherpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
