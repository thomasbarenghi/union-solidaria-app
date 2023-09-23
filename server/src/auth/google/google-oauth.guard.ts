import { ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UuidService } from '../../uuid/uuid.service';

@Injectable()
export class GoogleOauthGuard extends AuthGuard('google') {
  constructor(private readonly uuidService: UuidService) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { redirectURL: rUrlQ, role: roleQ, orgName: oNameQ } = request.query;
    const {
      redirectURL: rUrlS,
      role: roleS,
      orgName: oNameS,
    } = request.session;

    const redirectURL = rUrlQ ?? rUrlS;
    const role = roleQ ?? roleS;
    const orgName = oNameQ ?? oNameS;
    const uuid = this.uuidService.generateUuid();
    request.session.redirectURL = redirectURL;
    request.session.role = role;
    request.session.orgName = orgName;
    request.session.sessionId = uuid;

    return super.canActivate(context);
  }

  handleRequest(err: any, user: any) {
    try {
      return user;
    } catch (error) {
      console.log('Error handleRequest', err);
      throw new HttpException(err.message, err.status);
    }
  }
}
