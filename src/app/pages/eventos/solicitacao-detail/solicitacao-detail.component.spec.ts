import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoDetailComponent } from './solicitacao-detail.component';

describe('SolicitacaoDetailComponent', () => {
  let component: SolicitacaoDetailComponent;
  let fixture: ComponentFixture<SolicitacaoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitacaoDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitacaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
