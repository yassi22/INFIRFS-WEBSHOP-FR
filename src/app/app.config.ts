import { ApplicationConfig, DEFAULT_CURRENCY_CODE, importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router'; 
import { authInterceptor } from './auth/auth.interceptor copy';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    provideRouter(routes),
    importProvidersFrom(HttpClientModule), 
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
