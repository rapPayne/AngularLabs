import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';

export const isAdminUserGuard: CanActivateFn = (route, state) => {
  const authSvc = inject(AuthService);
  return authSvc.user()?.role === "admin";
};
