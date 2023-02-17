import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbonComponentComponent } from './carbon-component.component';

describe('CarbonComponentComponent', () => {
  let component: CarbonComponentComponent;
  let fixture: ComponentFixture<CarbonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CarbonComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarbonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
