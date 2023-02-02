import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectionWeaponComponent } from './card-selection-weapon.component';

describe('CardSelectionWeaponComponent', () => {
  let component: CardSelectionWeaponComponent;
  let fixture: ComponentFixture<CardSelectionWeaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelectionWeaponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelectionWeaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
