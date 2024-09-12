import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectsPageComponent } from './list-projects-page.component';

describe('ListProjectsPageComponent', () => {
  let component: ListProjectsPageComponent;
  let fixture: ComponentFixture<ListProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProjectsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
