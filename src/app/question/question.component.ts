import { Component, OnInit, Input } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent {
  @Input()
  question: any;
  form: FormGroup;

  constructor(fb: FormBuilder) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    this.form = new FormGroup({
      option: new FormControl(this.question.givenAns, Validators.required)
    });
  }
  submit() {
    console.log(this.form.value.option, "form Submitted", this.form);
    this.question.givenAns = this.form.value.option;
  }
}
