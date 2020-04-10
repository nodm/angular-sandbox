import { createFeatureSelector } from '@ngrx/store';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';

const selectRouter = createFeatureSelector<{ router: RouterReducerState<any> }, RouterReducerState<any>>('router');

export const routerSelectors = getSelectors(selectRouter);
