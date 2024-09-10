import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTypeLabelComponent } from './project-type-label.component';

describe('ProjectTypeLabelComponent', () => {
  let component: ProjectTypeLabelComponent;
  let fixture: ComponentFixture<ProjectTypeLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTypeLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTypeLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
