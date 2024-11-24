import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GfncPage } from './gfnc.page';

describe('GfncPage', () => {
  let component: GfncPage;
  let fixture: ComponentFixture<GfncPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GfncPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
