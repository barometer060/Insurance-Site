import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { VechileInsuranceComponent } from "./vechile-insurance/vechile-insurance.component";
import { HomeInsuranceComponent } from "./home-insurance/home-insurance.component";
import { MedicalInsuranceComponent } from "./medical-insurance/medical-insurance.component";

const routes: Routes = [
  { path: "", component: SignInComponent }
  {
    path: "home", component: HomeComponent, children: [
      { path: "vechile_insurance", component: VechileInsuranceComponent, outlet: "questions" },
      { path: "home_insurance", component: HomeInsuranceComponent, outlet: "questions" },
      { path: "medical_insurance", component: MedicalInsuranceComponent, outlet: "questions" }]
  },
  { path: "sign_in", redirectTo: "", component: SignInComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
