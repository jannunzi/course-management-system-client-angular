import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectionListEditorComponent } from './subsection-list-editor.component';

describe('SubsectionListEditorComponent', () => {
  let component: SubsectionListEditorComponent;
  let fixture: ComponentFixture<SubsectionListEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsectionListEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsectionListEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
