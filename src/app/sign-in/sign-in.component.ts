import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SignInService } from "../sign-in.service";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  submitted: boolean = false;
  sign_in: boolean = false;
  signForm: FormGroup;
  userDetails: Object;
  constructor(private fb: FormBuilder, private ser: SignInService) {}

  ngOnInit() {
    this.signForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  signIn(e) {
    e.preventDefault();
    this.submitted = true;
    let user = this.signForm.get("username").value;
    let pass = this.signForm.get("password").value;

    this.ser.getUser(user).subscribe(data => {
      this.userDetails = data;
      console.log(this.userDetails);
      if (
        this.userDetails["username"] == user &&
        this.userDetails["password"] === pass
      ) {
        this.sign_in = true;
        console.log(`Welcome ${user}`);
      }
    });
  }
}
