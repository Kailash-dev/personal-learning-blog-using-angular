import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroToAngularComponent } from './intro-to-angular.component';

describe('IntroToAngularComponent', () => {
  let component: IntroToAngularComponent;
  let fixture: ComponentFixture<IntroToAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroToAngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroToAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
