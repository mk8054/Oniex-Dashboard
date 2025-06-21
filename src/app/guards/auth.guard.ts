import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = false;
  const router = inject(Router);

  if (isAuthenticated) {
    console.log('Access granted - User is authenticated');
    return true;
  } else {
    console.warn('Access denied - User is not authenticated');
    router.navigate(['/login']);
    return false;
  }
};
