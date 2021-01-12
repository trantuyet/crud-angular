import {TestBed} from '@angular/core/testing';

import {ConfigService} from './config.service';

// tslint:disable-next-line:typedef
function getConfig() {
  //
}

describe('ConfigService', () => {
  let service: ConfigService;

  let configUrl;
  configUrl = 'assets/config.json';

  getConfig();
  {
    return this.http.get(this.configUrl);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


