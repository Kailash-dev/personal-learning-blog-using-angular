import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceTopicsComponent } from './advance-topics.component';

describe('AdvanceTopicsComponent', () => {
  let component: AdvanceTopicsComponent;
  let fixture: ComponentFixture<AdvanceTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
