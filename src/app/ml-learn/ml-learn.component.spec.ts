import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlLearnComponent } from './ml-learn.component';

describe('MlLearnComponent', () => {
  let component: MlLearnComponent;
  let fixture: ComponentFixture<MlLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MlLearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
