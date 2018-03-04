import { Component, OnInit } from '@angular/core';
import { Section } from './section';

@Component({
  selector: 'app-section-list-editor',
  templateUrl: './section-list-editor.component.html',
  styleUrls: ['./section-list-editor.component.css']
})
export class SectionListEditorComponent implements OnInit {

  sections: Section[];

  constructor() { }

  sectionLabelChanged(section) {
    console.log(section);
    // section.label = section.label.replace(/\n/, '');
    // section.label = section.label.replace(/\r/, '');
  }

  selectSection(section) {
    this.sections.forEach(function (_section: Section) {
      _section.selected = false;
    });
    section.selected = !section.selected;
  }

  ngOnInit() {
    this.sections = [
      {label: 'section a', selected: false},
      {label: 'section b', selected: false},
      {label: 'section c', selected: false}
    ];
  }

}
