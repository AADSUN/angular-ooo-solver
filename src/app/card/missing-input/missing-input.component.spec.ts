import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingInputComponent } from './missing-input.component';

describe('MissingInputComponent', () => {
  let component: MissingInputComponent;
  let fixture: ComponentFixture<MissingInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
