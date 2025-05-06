import {
    CanActivate,
    ExecutionContext,
    Injectable,
    ForbiddenException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { ROLES_KEY } from '../decorators/roles.decorator';
  import { Role } from '@prisma/client';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      // Get required roles from @Roles decorator
      const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
  
      // If no roles specified, allow access
      if (!requiredRoles || requiredRoles.length === 0) {
        return true;
      }
  
      const request = context.switchToHttp().getRequest();
      const user = request.user;
  
      if (!user) {
        throw new ForbiddenException('User not found in request');
      }
  
      if (!requiredRoles.includes(user.role)) {
        throw new ForbiddenException(
          `You need one of the following roles: [${requiredRoles.join(', ')}]`,
        );
      }
  
      return true;
    }
  }
  