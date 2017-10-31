import { TestBed, inject } from '@angular/core/testing';

import { AjaxClientService } from './ajax-client.service';

describe('AjaxClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjaxClientService]
    });
  });

  it('should be created', inject([AjaxClientService], (service: AjaxClientService) => {
    expect(service).toBeTruthy();
  }));
});
