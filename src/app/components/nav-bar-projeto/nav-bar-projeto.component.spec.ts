import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavBarProjetoComponent } from './nav-bar-projeto.component';

describe('NavBarProjetoComponent', () => {
  let component: NavBarProjetoComponent;
  let fixture: ComponentFixture<NavBarProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarProjetoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
