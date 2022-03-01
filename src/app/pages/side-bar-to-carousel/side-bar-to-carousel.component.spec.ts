import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarToCarouselComponent } from './side-bar-to-carousel.component';

describe('SideBarToCarouselComponent', () => {
  let component: SideBarToCarouselComponent;
  let fixture: ComponentFixture<SideBarToCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarToCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarToCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
