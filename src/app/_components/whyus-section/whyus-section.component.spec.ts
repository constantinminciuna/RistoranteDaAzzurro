import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyusSectionComponent } from './whyus-section.component';

describe('WhyusSectionComponent', () => {
  let component: WhyusSectionComponent;
  let fixture: ComponentFixture<WhyusSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyusSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
