import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCardEmptyStateComponent } from './project-card-empty-state.component';

describe('ProjectCardEmptyStateComponent', () => {
  let component: ProjectCardEmptyStateComponent;
  let fixture: ComponentFixture<ProjectCardEmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCardEmptyStateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCardEmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
