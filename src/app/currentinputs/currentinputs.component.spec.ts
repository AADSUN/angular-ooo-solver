import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentinputsComponent } from './currentinputs.component';

describe('CurrentinputsComponent', () => {
  let component: CurrentinputsComponent;
  let fixture: ComponentFixture<CurrentinputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentinputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
