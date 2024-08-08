import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorOverviewComponent } from './produtor-overview.component';

describe('ProdutorOverviewComponent', () => {
  let component: ProdutorOverviewComponent;
  let fixture: ComponentFixture<ProdutorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutorOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
