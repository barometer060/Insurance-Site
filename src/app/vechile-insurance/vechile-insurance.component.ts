import { Component, OnInit } from "@angular/core";
import { InsuranceService } from "../insurance.service";

@Component({
  selector: "app-vechile-insurance",
  templateUrl: "./vechile-insurance.component.html",
  styleUrls: ["./vechile-insurance.component.css"]
})
export class VechileInsuranceComponent implements OnInit {
  data: Object;
  types: Object;
  questions: Object;
  selectedType: string;
  setQuestions: boolean = false;
  submittedAns: string[] = [];
  constructor(private ser: InsuranceService) {}

  ngOnInit() {
    this.ser.getQuestion("vechile").subscribe(data => {
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
