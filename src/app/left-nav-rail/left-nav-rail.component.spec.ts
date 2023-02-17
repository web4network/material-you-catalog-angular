import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavRailComponent } from './left-nav-rail.component';

describe('LeftNavRailComponent', () => {
  let component: LeftNavRailComponent;
  let fixture: ComponentFixture<LeftNavRailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LeftNavRailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftNavRailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
