import * as model from "./master.model";
import * as actions from "./master.action";

const initialState = (function(): model.MasterState {
  const state: model.MasterState = {
    categories: []
  };
  return state;
})();

export function reducer(state = initialState, action: actions.Actions) {
  switch (action.type) {
    case actions.actionType.GET_CATEGORY_LIST_SUCCESS: {
      return Object.assign({}, state, { categories: action.payload });
    }
    case actions.actionType.SAVE_CATEGORY_LIST_SUCCESS: {
      return Object.assign({}, state, { categories: action.payload });
    }
    case actions.actionType.DELETE_CATEGORY_LIST_SUCCESS: {
      return Object.assign({}, state, { categories: action.payload });
    }
    default: {
      return state;
    }
  }
}
