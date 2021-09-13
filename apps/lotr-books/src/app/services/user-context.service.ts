import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '.';
import { UserInfo } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {

  isSignedIn$ = new BehaviorSubject<boolean>(false);
  userInfo$!: Observable<UserInfo | undefined>;
  
  constructor(authenticationService: AuthenticationService) {

    this.userInfo$ = authenticationService.signIn$
      .pipe(tap(userInfo => {
        console.log(userInfo);
        this.isSignedIn$.next(userInfo !== undefined);
      }));
      
    setInterval(() => {
      authenticationService.signOut();
    }, 20000);
  }
}
