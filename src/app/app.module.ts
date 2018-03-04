import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course.component';
import { ModuleListComponent } from './components/module-list/module-list.component';
import { CourseEditorComponent } from './components/course-editor/course-editor.component';
import { SectionListEditorComponent } from './components/section-list-editor/section-list-editor.component';
import { SubsectionListEditorComponent } from './components/subsection-list-editor/subsection-list-editor.component';
import { FormsModule } from '@angular/forms';
import { ContenteditableDirective } from 'ng-contenteditable';
import { SortablejsModule } from 'angular-sortablejs';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ModuleListComponent,
    CourseEditorComponent,
    SectionListEditorComponent,
    SubsectionListEditorComponent,
    ContenteditableDirective
  ],
  imports: [
    SortablejsModule,
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
