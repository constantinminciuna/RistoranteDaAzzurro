import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsSectionComponent } from './chefs-section.component';

describe('ChefsSectionComponent', () => {
  let component: ChefsSectionComponent;
  let fixture: ComponentFixture<ChefsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
