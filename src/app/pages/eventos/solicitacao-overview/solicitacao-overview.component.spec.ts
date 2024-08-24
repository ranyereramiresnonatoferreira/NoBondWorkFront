import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoOverviewComponent } from './solicitacao-overview.component';

describe('SolicitacaoOverviewComponent', () => {
  let component: SolicitacaoOverviewComponent;
  let fixture: ComponentFixture<SolicitacaoOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitacaoOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitacaoOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
