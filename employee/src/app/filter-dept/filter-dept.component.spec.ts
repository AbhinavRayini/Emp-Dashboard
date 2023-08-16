import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDeptComponent } from './filter-dept.component';

describe('FilterDeptComponent', () => {
  let component: FilterDeptComponent;
  let fixture: ComponentFixture<FilterDeptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDeptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
