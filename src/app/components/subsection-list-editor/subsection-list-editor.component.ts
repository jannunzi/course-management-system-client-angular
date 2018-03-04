import { Component, OnInit } from '@angular/core';
import { Subsection } from './subsection';

@Component({
  selector: 'app-subsection-list-editor',
  templateUrl: './subsection-list-editor.component.html',
  styleUrls: ['./subsection-list-editor.component.css']
})
export class SubsectionListEditorComponent implements OnInit {

  subsections: Subsection[];

  constructor() { }

  selectSubsection(subsection) {
    this.subsections.forEach(function (_subsection: Subsection) {
      _subsection.selected = false;
    });
    subsection.selected = !subsection.selected;
  }

  ngOnInit() {
    this.subsections = [
      {label: 'Subsection 1', selected: false},
      {label: 'Subsection 2', selected: false},
      {label: 'Subsection 3', selected: false},
      {label: 'Subsection 4', selected: false},
      {label: 'Subsection 5', selected: false}
    ];
  }

}
