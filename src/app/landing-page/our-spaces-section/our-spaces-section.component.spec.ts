import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSpacesSectionComponent } from './our-spaces-section.component';

describe('OurSpacesSectionComponent', () => {
  let component: OurSpacesSectionComponent;
  let fixture: ComponentFixture<OurSpacesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurSpacesSectionComponent]
    });
    fixture = TestBed.createComponent(OurSpacesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
