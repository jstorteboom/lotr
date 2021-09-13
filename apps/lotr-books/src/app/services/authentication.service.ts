import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  signIn$ = new BehaviorSubject<UserInfo | undefined>(undefined);

  signIn(username: string, password: string) : void {
    console.log(username);
    if(password === '1234') {
      this.signIn$.next({ displayname: "John Doe", email: username });
    } else {
      this.signIn$.next(undefined);
    }
  }

  signOut(): void {
    this.signIn$.next(undefined);
  }
}
