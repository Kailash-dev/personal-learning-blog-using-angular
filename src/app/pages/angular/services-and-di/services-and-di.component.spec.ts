import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAndDiComponent } from './services-and-di.component';

describe('ServicesAndDiComponent', () => {
  let component: ServicesAndDiComponent;
  let fixture: ComponentFixture<ServicesAndDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesAndDiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesAndDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
