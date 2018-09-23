import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as model from "./master.model";

export const getMasterState = createFeatureSelector<model.MasterState>("master");
export const getCategoryList = createSelector(
  getMasterState,
  (state: model.MasterState): model.Category[] => state.categories
);
