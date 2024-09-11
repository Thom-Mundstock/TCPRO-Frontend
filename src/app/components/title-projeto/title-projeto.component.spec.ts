import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleProjetoComponent } from './title-projeto.component';

describe('TitleProjetoComponent', () => {
  let component: TitleProjetoComponent;
  let fixture: ComponentFixture<TitleProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
