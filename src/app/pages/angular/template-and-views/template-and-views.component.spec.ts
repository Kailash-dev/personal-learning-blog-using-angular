import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAndViewsComponent } from './template-and-views.component';

describe('TemplateAndViewsComponent', () => {
  let component: TemplateAndViewsComponent;
  let fixture: ComponentFixture<TemplateAndViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateAndViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateAndViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
