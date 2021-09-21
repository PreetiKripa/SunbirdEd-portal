import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEligibilityComponent } from './course-eligibility.component';

describe('CourseEligibilityComponent', () => {
  let component: CourseEligibilityComponent;
  let fixture: ComponentFixture<CourseEligibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEligibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEligibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
