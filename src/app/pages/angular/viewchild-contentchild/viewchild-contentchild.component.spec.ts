import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildContentchildComponent } from './viewchild-contentchild.component';

describe('ViewchildContentchildComponent', () => {
  let component: ViewchildContentchildComponent;
  let fixture: ComponentFixture<ViewchildContentchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildContentchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewchildContentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
