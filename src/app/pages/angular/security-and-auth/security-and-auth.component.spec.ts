import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndAuthComponent } from './security-and-auth.component';

describe('SecurityAndAuthComponent', () => {
  let component: SecurityAndAuthComponent;
  let fixture: ComponentFixture<SecurityAndAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityAndAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityAndAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
