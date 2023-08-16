import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortAttComponent } from './sort-att.component';

describe('SortAttComponent', () => {
  let component: SortAttComponent;
  let fixture: ComponentFixture<SortAttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortAttComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
