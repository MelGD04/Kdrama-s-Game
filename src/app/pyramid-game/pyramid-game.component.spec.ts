import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PyramidGameComponent } from './pyramid-game.component';

describe('PyramidGameComponent', () => {
  let component: PyramidGameComponent;
  let fixture: ComponentFixture<PyramidGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PyramidGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PyramidGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
