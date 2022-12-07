import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupriseComponent } from './suprise.component';

describe('SupriseComponent', () => {
  let component: SupriseComponent;
  let fixture: ComponentFixture<SupriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
