import { Component, OnInit } from '@angular/core';
import {Module} from './module';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules: Module[];

  constructor() { }

  ngOnInit() {
    this.modules = [
      {label: 'Module 1', selected: false},
      {label: 'Module 2', selected: false},
      {label: 'Module 3', selected: false},
      {label: 'Module 4', selected: false},
      {label: 'Module 5', selected: false}
    ];
  }

  selectModule(module) {
    this.modules.forEach(function(_module: Module) {
      _module.selected = false;
    });
    module.selected = true;
  }

  deleteModule(module) {
    this.modules.splice(this.modules.indexOf(module), 1);
  }

  addModule() {
    const module = new Module('New Module', false);
    this.modules.push(module);
    this.selectModule(module);
  }

}
