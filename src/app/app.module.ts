import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeInsuranceComponent } from "./home-insurance/home-insurance.component";
import { VechileInsuranceComponent } from "./vechile-insurance/vechile-insurance.component";
import { MedicalInsuranceComponent } from "./medical-insurance/medical-insurance.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    HomeInsuranceComponent,
    VechileInsuranceComponent,
    MedicalInsuranceComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
