import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { VechileInsuranceComponent } from "./vechile-insurance/vechile-insurance.component";
import { HomeInsuranceComponent } from "./home-insurance/home-insurance.component";
import { MedicalInsuranceComponent } from "./medical-insurance/medical-insurance.component";

const routes: Routes = [
  { path: "home", redirectTo: "", component: HomeComponent },
  { path: "sign_in", component: SignInComponent },
  { path: "vechile_insurance", component: VechileInsuranceComponent },
  { path: "home_insurance", component: HomeInsuranceComponent },
  { path: "medical_insurance", component: MedicalInsuranceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
