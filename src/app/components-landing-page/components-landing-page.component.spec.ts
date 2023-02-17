import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLandingPageComponent } from './components-landing-page.component';

describe('ComponentsLandingPageComponent', () => {
  let component: ComponentsLandingPageComponent;
  let fixture: ComponentFixture<ComponentsLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComponentsLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
