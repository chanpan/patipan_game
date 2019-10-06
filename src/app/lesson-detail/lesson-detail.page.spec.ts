import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDetailPage } from './lesson-detail.page';

describe('LessonDetailPage', () => {
  let component: LessonDetailPage;
  let fixture: ComponentFixture<LessonDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
