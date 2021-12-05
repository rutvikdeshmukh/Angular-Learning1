import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipStatusComponent } from './relationship-status.component';

describe('RelationshipStatusComponent', () => {
  let component: RelationshipStatusComponent;
  let fixture: ComponentFixture<RelationshipStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelationshipStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationshipStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
