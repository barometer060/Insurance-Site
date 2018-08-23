import { Component, OnInit } from "@angular/core";
import { InsuranceService } from "../insurance.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-home-insurance",
  templateUrl: "./home-insurance.component.html",
  styleUrls: ["./home-insurance.component.css"]
})
export class HomeInsuranceComponent implements OnInit {
  myform: FormGroup;
  data: Object;
  types: Object;
  questions: Object;
  selectedType: string;
  submittedAns: string[] = [];
  setQuestions: boolean = false;
  constructor(private ser: InsuranceService, private fb: FormBuilder) {}

  ngOnInit() {
    this.ser.getQuestion("home").subscribe(data => {
      this.data = data;
      this.types = Object.keys(data);
    });
  }

  getQuestion(e) {
    e.preventDefault();
    this.selectedType = e.target.id;
    this.setQuestions = true;
    this.questions = this.data[this.selectedType];
  }

  getValue(e) {
    let ans = e.target.value;
    let index = e.target.id;
    this.submittedAns[index] = ans;
  }

  submitData(e) {
    e.preventDefault();
    console.log(this.submittedAns);
  }
}
