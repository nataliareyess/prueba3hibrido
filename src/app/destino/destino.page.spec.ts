import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DestinosPage } from './destino.page';

describe('DestinosPage', () => {
  let component: DestinosPage;
  let fixture: ComponentFixture<DestinosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DestinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
