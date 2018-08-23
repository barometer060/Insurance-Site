import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InsuranceService {
  private _url: string = "/assets/insurances/";
  constructor(private _http: HttpClient) {}

  getQuestion(insurance: string) {
    return this._http.get(this._url + insurance + ".json");
  }
}
