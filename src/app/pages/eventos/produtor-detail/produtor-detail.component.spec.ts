import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutorDetailComponent } from './produtor-detail.component';

describe('ProdutorDetailComponent', () => {
  let component: ProdutorDetailComponent;
  let fixture: ComponentFixture<ProdutorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutorDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdutorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
