import { TestBed, async } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthService', () => {
    beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, MatDialogModule, RouterTestingModule
      ],
      declarations: [        
      ],
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
