import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeInputComponent } from './alternative-input.component';

describe('AlternativeInputComponent', () => {
  let component: AlternativeInputComponent;
  let fixture: ComponentFixture<AlternativeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
