import { TestBed, inject } from '@angular/core/testing';

import { MovieStoreService } from './moviestore.service';

describe('MovieStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieStoreService]
    });
  });

  it('should be created', inject([MovieStoreService], (service: MovieStoreService) => {
    expect(service).toBeTruthy();
  }));
});
