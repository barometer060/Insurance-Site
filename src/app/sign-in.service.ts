import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SignInService {
  private _url = "/assets/users/";
  constructor(private _http: HttpClient) {}

  getUser(username: string) {
    return this._http.get(this._url + username + ".json");
  }
}
