import { Injectable } from '@angular/core';
import * as base64 from "js-base64";

@Injectable({
  providedIn: "root"
})
export class TokenUtilitiesService {

  getDecodedToken(token: string) {
    const tokenPayload = token.split(".")[1];
    return JSON.parse(base64.Base64.decode(tokenPayload));
  }

}
