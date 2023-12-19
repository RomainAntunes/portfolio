import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetDetailComponent } from './projet-detail.component';

describe('ProjetDetailComponent', () => {
  let component: ProjetDetailComponent;
  let fixture: ComponentFixture<ProjetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetDetailComponent]
    });
    fixture = TestBed.createComponent(ProjetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
