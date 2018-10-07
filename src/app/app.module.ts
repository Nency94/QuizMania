import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { ChartsModule } from "ng2-charts/ng2-charts";

import { AppComponent } from "./app.component";
import { QuestionComponent } from "./question/question.component";
import { GraphComponent } from "./graph/graph.component";
import { HandlerComponent } from "./handler/handler.component";

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    GraphComponent,
    HandlerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
