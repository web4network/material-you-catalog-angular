import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageHeroVideoComponent } from './homepage-hero-video.component';

describe('HomepageHeroVideoComponent', () => {
  let component: HomepageHeroVideoComponent;
  let fixture: ComponentFixture<HomepageHeroVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomepageHeroVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageHeroVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
