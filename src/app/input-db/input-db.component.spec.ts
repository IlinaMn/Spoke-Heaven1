import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDBComponent } from './input-db.component';

describe('InputDBComponent', () => {
  let component: InputDBComponent;
  let fixture: ComponentFixture<InputDBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
