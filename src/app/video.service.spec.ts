import { TestBed, async } from '@angular/core/testing';

import { VideoService } from './video.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('VideoService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule, RouterTestingModule
      ],
      declarations: [        
      ],
    }).compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VideoService = TestBed.get(VideoService);
    expect(service).toBeTruthy();
  });
});
