import { Action, ActionReducerMap, ActionReducer, MetaReducer } from "@ngrx/store";
import { environment } from "../../../environments/environment";

export interface State {
  name: string;
}
export const intialState = "Root";
function reducer(state = intialState, action: Action): string {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
export const reducers: ActionReducerMap<State> = {
  name: reducer
};
function Logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: Action): State {
    console.log("State:", state);
    console.log("Action:", action);
    const newstate = reducer(state, action);
    console.log("New State:", newstate);
    return newstate;
  };
}
export const metaReducers: MetaReducer<State>[] = !environment.production?[Logger]:[];
