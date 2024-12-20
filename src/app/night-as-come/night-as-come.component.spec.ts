import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightAsComeComponent } from './night-as-come.component';

describe('NightAsComeComponent', () => {
  let component: NightAsComeComponent;
  let fixture: ComponentFixture<NightAsComeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NightAsComeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightAsComeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
