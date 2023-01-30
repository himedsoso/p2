import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGaleryComponent } from './modal-galery.component';

describe('ModalGaleryComponent', () => {
  let component: ModalGaleryComponent;
  let fixture: ComponentFixture<ModalGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGaleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
