import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerOverviewComponent } from './freelancer-overview.component';

describe('FreelancerOverviewComponent', () => {
  let component: FreelancerOverviewComponent;
  let fixture: ComponentFixture<FreelancerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreelancerOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreelancerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
