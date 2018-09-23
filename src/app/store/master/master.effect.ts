import { Injectable } from "@angular/core";
import { Action, Store } from "@ngrx/store";
import { Effect, EffectsModule, Actions } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { switchMap, catchError, map } from "rxjs/operators";
import * as actions from "./master.action";
import { MasterService } from "./master.service";
@Injectable()
export class MasterEffect {
  constructor(private actions$: Actions, private ser: MasterService) {}
  @Effect()
  getCategoryList$: Observable<Action> = this.actions$
    .ofType(actions.actionType.GET_CATEGORY_LIST)
    .pipe(
      switchMap((action: actions.GetCategoryListAction) => {
        return this.ser.getCategoryList().pipe(
          map(rep => {
            return new actions.GetCategoryListActionSuccess(rep);
          }),
          catchError(err => {
            return of(new actions.GetCategoryListActionFail(err));
          })
        );
      })
    );
  @Effect()
  saveCategory$: Observable<Action> = this.actions$
    .ofType(actions.actionType.SAVE_CATEGORY_LIST)
    .pipe(
      switchMap((action: actions.SaveCategoryListAction) => {
        return this.ser.saveCategory(action.payload).pipe(
          map(rep => {
            return new actions.SaveCategoryListActionSuccess(rep);
          }),
          catchError(err => {
            return of(new actions.SaveCategoryListActionFail(err));
          })
        );
      })
    );
    @Effect()
    deleteCategory$: Observable<Action> = this.actions$
      .ofType(actions.actionType.DELETE_CATEGORY_LIST)
      .pipe(
        switchMap((action: actions.DeteleCategoryListAction) => {
          return this.ser.deleteCategory(action.payload).pipe(
            map(rep => {
              return new actions.DeteleCategoryListActionSuccess(rep);
            }),
            catchError(err => {
              return of(new actions.DeteleCategoryListActionFail(err));
            })
          );
        })
      );
}
