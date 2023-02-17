import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationDrawerItemComponent } from './navigation-drawer-item.component';

describe('NavigationDrawerItemComponent', () => {
  let component: NavigationDrawerItemComponent;
  let fixture: ComponentFixture<NavigationDrawerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NavigationDrawerItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationDrawerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
