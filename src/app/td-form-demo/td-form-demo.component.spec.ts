import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdFormDemoComponent } from './td-form-demo.component';

describe('TdFormDemoComponent', () => {
  let component: TdFormDemoComponent;
  let fixture: ComponentFixture<TdFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TdFormDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TdFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
