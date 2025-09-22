import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiBasicComponent } from './ai-basic.component';

describe('AiBasicComponent', () => {
  let component: AiBasicComponent;
  let fixture: ComponentFixture<AiBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
