import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalComponent } from './personnal.component';

describe('PersonnalComponent', () => {
  let component: PersonnalComponent;
  let fixture: ComponentFixture<PersonnalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnalComponent]
    });
    fixture = TestBed.createComponent(PersonnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
