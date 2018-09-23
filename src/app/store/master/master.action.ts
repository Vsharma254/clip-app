import { Action } from "@ngrx/store";
import * as model from "./master.model";
export const actionType = {
  GET_CATEGORY_LIST: "[Master] Get Master List",
  GET_CATEGORY_LIST_SUCCESS: "[Master] Get Category List success",
  GET_CATEGORY_LIST_FAIL: "[Master] Get Category List fail",

  SAVE_CATEGORY_LIST: "[Master] SAVE Category List",
  SAVE_CATEGORY_LIST_SUCCESS: "[Master] SAVE Category List success",
  SAVE_CATEGORY_LIST_FAIL: "[Master] SAVE Category List fail",

  DELETE_CATEGORY_LIST: "[Master] DELETE Category List",
  DELETE_CATEGORY_LIST_SUCCESS: "[Master] DELETE Category List success",
  DELETE_CATEGORY_LIST_FAIL: "[Master] DELETE Category List fail"
};
export class GetCategoryListAction implements Action {
  public readonly type = actionType.GET_CATEGORY_LIST;
  constructor(public payload: string) {}
}
export class GetCategoryListActionSuccess implements Action {
  public readonly type = actionType.GET_CATEGORY_LIST_SUCCESS;
  constructor(public payload: model.Category[]) {}
}
export class GetCategoryListActionFail implements Action {
  public readonly type = actionType.GET_CATEGORY_LIST_FAIL;
  constructor(public payload: any) {}
}

export class SaveCategoryListAction implements Action {
  public readonly type = actionType.GET_CATEGORY_LIST;
  constructor(public payload: model.Category) {}
}
export class SaveCategoryListActionSuccess implements Action {
  public readonly type = actionType.GET_CATEGORY_LIST_SUCCESS;
  constructor(public payload: model.Category[]) {}
}
export class SaveCategoryListActionFail implements Action {
  public readonly type = actionType.GET_CATEGORY_LIST_FAIL;
  constructor(public payload: any) {}
}

export class DeteleCategoryListAction implements Action {
  public readonly type = actionType.GET_CATEGORY_LIST;
  constructor(public payload: model.Category) {}
}
export class DeteleCategoryListActionSuccess implements Action {
  public readonly type = actionType.GET_CATEGORY_LIST_SUCCESS;
  constructor(public payload: model.Category[]) {}
}
export class DeteleCategoryListActionFail implements Action {
  public readonly type = actionType.GET_CATEGORY_LIST_FAIL;
  constructor(public payload: any) {}
}
export type Actions = 
GetCategoryListAction |  
GetCategoryListActionFail |
GetCategoryListActionSuccess
| SaveCategoryListActionFail
| SaveCategoryListActionSuccess
| SaveCategoryListAction 
| DeteleCategoryListAction
| DeteleCategoryListActionSuccess
| DeteleCategoryListActionFail ;

