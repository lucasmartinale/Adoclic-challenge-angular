import { TestBed } from '@angular/core/testing';

import { FakeService } from './fake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FakeServiceService', () => {
  let service: FakeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
