import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserContextService, UserInfo } from '@lens/core/lib';

@Component({
  selector: 'lotr-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userInfo?: UserInfo;

  constructor(
    public userContext: UserContextService,
    private authenticationService: AuthenticationService ) { }

  ngOnInit(): void {
    this.userContext.userInfo$.subscribe(info => {
      this.userInfo = info;
    })
  }

  signIn() : void {
    this.authenticationService.signIn('john@doe.org', '1234');
  }

  signOut(): void {
    this.authenticationService.signOut();
  }
}
