import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UuidService } from '../../uuid/uuid.service';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(private readonly uuidService: UuidService) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const uuid = this.uuidService.generateUuid();
    request.session.sessionId = uuid;
    return super.canActivate(context);
  }
}
