import { createContext, useContext, useReducer } from "react";

const initialHeaderState = {
  isSticky: false,
  showForm: true,
  showMiniForm: false,
  miniFormAnimationValue: "none",
};

const headerReducer = (state, action) => {
  switch (action.type) {
    case "INTERSECT_DOWN":
      return {
        ...state,
        isSticky: true,
        showForm: false,
        showMiniForm: true,
        miniFormAnimationValue: "minimize",
      };
    case "INTERSECT_UP":
      return {
        ...state,
        isSticky: false,
        miniFormAnimationValue: "maximize",
      };
    case "AFTER_ANIMATION":
      return {
        ...state,
        showMiniForm: false,
        showForm: true,
      };
    case "CLICK_MINIFORM":
      return {
        ...state,
        miniFormAnimationValue: "maximize",
      };
    case "CLICK_SEARCH":
      return {
        ...state,
        showForm: false,
        showMiniForm: true,
        miniFormAnimationValue: "none",
      };
  }
};

const HeaderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(headerReducer, initialHeaderState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export const useHeaderState = () => {
  const state = useContext(StateContext);
  if (!state) throw new Error("");
  return state;
};

export const useHeaderDispatch = () => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error("");
  return dispatch;
};

export default HeaderProvider;
