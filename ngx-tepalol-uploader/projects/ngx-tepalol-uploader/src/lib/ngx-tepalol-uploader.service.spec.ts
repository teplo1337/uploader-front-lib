import { TestBed } from '@angular/core/testing';

import { NgxTepalolUploaderService } from './ngx-tepalol-uploader.service';

describe('NgxTepalolUploaderService', () => {
  let service: NgxTepalolUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTepalolUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
