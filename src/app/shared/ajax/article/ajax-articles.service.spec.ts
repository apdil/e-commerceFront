import { TestBed, inject } from '@angular/core/testing';

import { AjaxArticlesService } from './ajax-articles.service';

describe('AjaxArticlesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjaxArticlesService]
    });
  });

  it('should be created', inject([AjaxArticlesService], (service: AjaxArticlesService) => {
    expect(service).toBeTruthy();
  }));
});
