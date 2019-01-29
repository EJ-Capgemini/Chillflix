import { TestBed, async } from '@angular/core/testing';

import { UtilService } from './util.service';
import { MatDialogModule } from '@angular/material';

describe('UtilService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      declarations: [        
      ],
    }).compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtilService = TestBed.get(UtilService);
    expect(service).toBeTruthy();
  });
});
