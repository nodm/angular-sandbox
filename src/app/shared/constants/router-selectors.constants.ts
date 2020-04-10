import { createFeatureSelector } from '@ngrx/store';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';

import { STORE_ROUTER_FEATURE_NAME } from '../../app.constants';

const selectRouter = createFeatureSelector<
  { [STORE_ROUTER_FEATURE_NAME]: RouterReducerState<any> },
  RouterReducerState<any>
>(STORE_ROUTER_FEATURE_NAME);

export const routerSelectors = getSelectors(selectRouter);
