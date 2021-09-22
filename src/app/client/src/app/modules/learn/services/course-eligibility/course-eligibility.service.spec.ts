import { TestBed } from '@angular/core/testing';

import { CourseEligibilityService } from './course-eligibility.service';

describe('CourseEligibilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseEligibilityService = TestBed.get(CourseEligibilityService);
    expect(service).toBeTruthy();
  });
});
