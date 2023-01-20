import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineFightComponent } from './timeline-fight.component';

describe('TimelineFightComponent', () => {
  let component: TimelineFightComponent;
  let fixture: ComponentFixture<TimelineFightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineFightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineFightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
