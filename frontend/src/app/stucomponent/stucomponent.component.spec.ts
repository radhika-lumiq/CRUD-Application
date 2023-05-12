import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StucomponentComponent } from './stucomponent.component';

describe('StucomponentComponent', () => {
  let component: StucomponentComponent;
  let fixture: ComponentFixture<StucomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StucomponentComponent]
    });
    fixture = TestBed.createComponent(StucomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
