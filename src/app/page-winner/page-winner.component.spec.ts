import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWinnerComponent } from './page-winner.component';

describe('PageWinnerComponent', () => {
  let component: PageWinnerComponent;
  let fixture: ComponentFixture<PageWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageWinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
