import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionListEditorComponent } from './section-list-editor.component';

describe('SectionListEditorComponent', () => {
  let component: SectionListEditorComponent;
  let fixture: ComponentFixture<SectionListEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionListEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
