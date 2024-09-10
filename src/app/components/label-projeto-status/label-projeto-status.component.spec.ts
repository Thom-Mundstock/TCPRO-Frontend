import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelProjetoStatusComponent } from './label-projeto-status.component';

describe('LabelProjetoStatusComponent', () => {
  let component: LabelProjetoStatusComponent;
  let fixture: ComponentFixture<LabelProjetoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelProjetoStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelProjetoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
