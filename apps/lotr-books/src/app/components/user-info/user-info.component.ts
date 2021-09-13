import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../models';
import { AuthenticationService, UserContextService } from '../../services';

@Component({
  selector: 'lotr-user',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserComponent implements OnInit {

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
