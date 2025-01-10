import { createContext, useContext, useReducer } from "react";

const SelectPlansContext = createContext()

// Initial state for the plans selection context
const initialState = {
    type: "monthly",
    selectedPlan: "",
    planPrice: "",
    error: ""
}

// manages the sate for the plans selection system
function reducer(state, action) {
    switch (action.type) {
      case "togglePlan":
        return {
          ...state,
          type: state.type === "monthly" ? "yearly" : "monthly",
          planPrice:
            state.type === "monthly"
              ? state.planPrice * 10
              : state.planPrice / 10,
        };
      case "selectPlan":
        return {
          ...state,
          selectedPlan: action.payload.title,
          planPrice: action.payload.price,
        };
      case "setError":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  }
  
  function SelectPlansProvider({ children }) {
    const [{ type, selectedPlan, error, planPrice }, dispatch] = useReducer(
      reducer,
      initialState
    );
  
    return (
      <SelectPlansContext.Provider
        value={{
          type,
          selectedPlan,
          error,
          planPrice,
          dispatch,
        }}
      >
        {children}
      </SelectPlansContext.Provider>
    );
  }
  
  function usePlans() {
    const context = useContext(SelectPlansContext);
    if (context === undefined) {
      throw new Error("usePlans must be used within a PlansProvider");
    }
    return context;
  }
  
  export { SelectPlansProvider, usePlans };