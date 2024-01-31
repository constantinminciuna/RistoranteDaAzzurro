import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialsSectionComponent } from './specials-section.component';

describe('SpecialsSectionComponent', () => {
  let component: SpecialsSectionComponent;
  let fixture: ComponentFixture<SpecialsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
