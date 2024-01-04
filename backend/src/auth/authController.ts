import {
  Body,
  Controller, Get,
  Post,
  Response,
  Route,
} from 'tsoa';

import {Credentials, LoggedInUser} from './auth';
import {AuthService} from './authService';

@Route('login')
export class AuthController extends Controller {
  @Post()
  @Response('401', 'Unauthorised')
  public async login(
    @Body() credentials: Credentials,
  ): Promise<LoggedInUser|undefined> {
    return new AuthService().login(credentials)
      .then(async (user: LoggedInUser|undefined): Promise<LoggedInUser|undefined> => {
        if (!user) {
          this.setStatus(401);
        }
        return user;
      });
  }
}
