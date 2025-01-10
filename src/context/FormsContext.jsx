import { createContext, useContext, useEffect, useReducer } from "react";

const FormContext = createContext();

// defined initial state of the form
const initialState = {
  steps: 1,
  page: "page1",
  name: "",
  email: "",
  phone: "",
  nameError: "",
  emailError: "",
  phoneError: "",
};

// Reducer function to handle all form-related state updates
function reducer(state, action) {
  switch (action.type) {
    case "setSteps":
      return { ...state, steps: action.payload };
    case "setName":
      return { ...state, name: action.payload };
    case "setEmail":
      return { ...state, email: action.payload };
    case "setPhone":
      return { ...state, phone: action.payload };
    case "setNameError":
      return { ...state, nameError: action.payload };
    case "setEmailError":
      return { ...state, emailError: action.payload };
    case "setPhoneError":
      return { ...state, phoneError: action.payload };
    default:
      throw new Error();
  }
}

function FormProvider({ children }) {
  // Destructure state values and dispatch function from useReducer
  const [
    { steps, page, phone, name, email, nameError, phoneError, emailError },
    dispatch,
  ] = useReducer(reducer, initialState);

  // Handles name input validation
  function handleName(e) {
    const name = e.target.value;
    dispatch({ type: "setName", payload: name });

    if (!name.trim()) {
      dispatch({ type: "setNameError", payload: "This field is required" });
    } else {
      dispatch({ type: "setNameError", payload: "" });
    }
  }

  // Handles phone input validation
  function handlePhone(e) {
    const phone = e.target.value;
    dispatch({ type: "setPhone", payload: phone });

    if (!phone) {
      dispatch({ type: "setPhoneError", payload: "This field is required" });
    } else if (phone.length < 7) {
      dispatch({ type: "setPhoneError", payload: "This field is required" });
    } else {
      dispatch({ type: "setPhoneError", payload: "" });
    }
  }

  // Handles email input validation
  function handleEmail(e) {
    const email = e.target.value;
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    dispatch({ type: "setEmail", payload: email });

    if (!emailPattern.test(email)) {
      dispatch({ type: "setEmailError", payload: "This field is required" });
    } else {
      dispatch({ type: "setEmailError", payload: "" });
    }
  }

  // Updates the current step based on the URL path
  useEffect(() => {
    if (location.pathname === "/plans") {
      dispatch({ type: "setSteps", payload: 2 });
    }
    if (location.pathname === "/addOns") {
      dispatch({ type: "setSteps", payload: 3 });
    }
    if (location.pathname === "/summary") {
      dispatch({ type: "setSteps", payload: 4 });
    }
  }, []);

  return (
    <FormContext.Provider
      value={{
        steps,
        page,
        dispatch,
        name,
        phone,
        email,
        handleName,
        handlePhone,
        handleEmail,
        nameError,
        phoneError,
        emailError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

// Use the useForm hook in child components to access form state and handlers
function useForm() {
  const context = useContext(FormContext);
  if (context === undefined)
    throw new Error("useForm must be used within a FormProvider");
  return context;
}

export { FormProvider, useForm };
