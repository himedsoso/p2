import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSelectionCharactersComponent } from './page-selection-characters.component';

describe('PageSelectionCharactersComponent', () => {
  let component: PageSelectionCharactersComponent;
  let fixture: ComponentFixture<PageSelectionCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSelectionCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSelectionCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
