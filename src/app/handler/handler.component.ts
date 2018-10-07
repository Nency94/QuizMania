import { environment } from "../../environments/environment";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-handler",
  templateUrl: "./handler.component.html",
  styleUrls: ["./handler.component.css"]
})
export class HandlerComponent implements OnInit {
  questions: any[];
  submitted: any = 0;
  rightQues: any = 0;
  wrongQues: any = 0;
  showPogress = false;

  constructor() {}

  ngOnInit() {
    this.reset();
  }
  check() {
    let checkAns = true;
    this.questions.forEach(o => {
      if (!o.givenAns) {
        checkAns = false;
      }
    });
    return checkAns;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.check()) {
      return;
    }
    this.questions.forEach(o => {
      if (o.answer === o.givenAns) {
        this.rightQues++;
      } else {
        this.wrongQues++;
      }
    });
    this.showPogress = true;
  }

  reset() {
    this.submitted = false;
    this.rightQues = 0;
    this.wrongQues = 0;
    this.questions = environment.ques.map(x => Object.assign({}, x));
    this.showPogress = false;
  }
}
