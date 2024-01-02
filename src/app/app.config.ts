import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { metaReducers, reducers } from './store/app.reducers';
import { provideEffects } from '@ngrx/effects';
import { effects } from './store/app.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(reducers, { metaReducers }),
    provideEffects(effects),
    provideAnimations(),
    provideToastr(),
  ],
};
