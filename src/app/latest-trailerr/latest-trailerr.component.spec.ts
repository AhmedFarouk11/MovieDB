import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestTrailerrComponent } from './latest-trailerr.component';

describe('LatestTrailerrComponent', () => {
  let component: LatestTrailerrComponent;
  let fixture: ComponentFixture<LatestTrailerrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestTrailerrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestTrailerrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
