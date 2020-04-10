import { environment } from '~env/environment';

export const STORE_CONFIG = {
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
    strictActionWithinNgZone: true,
    strictStateSerializability: true,
    strictActionSerializability: true,
  },
};

const STORE_DEVTOOLS_ACTION_TO_STORE = 25;
export const STORE_DEVTOOLS_CONFIG = {
  maxAge: STORE_DEVTOOLS_ACTION_TO_STORE,
  logOnly: environment.production,
  name: 'Angular Sandbox',
};

export const STORE_ROUTER_FEATURE_NAME = 'router';
