import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarProjetoComponent } from './progress-bar-projeto.component';

describe('ProgressBarProjetoComponent', () => {
  let component: ProgressBarProjetoComponent;
  let fixture: ComponentFixture<ProgressBarProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
