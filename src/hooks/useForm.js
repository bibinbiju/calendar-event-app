import { useReducer } from "react";
const formReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "CHANGE":
      if (payload) {
        const value =
          payload.type === "checkbox" ? payload.checked : payload.value;
        return { ...state, [payload.name]: value };
      }
      return state;
    default:
      return state;
  }
};
export function useForm(formObject = {}) {
  const [state, dispatch] = useReducer(formReducer, formObject);
  const handleChange = (e) => dispatch({ type: "CHANGE", payload: e.target });
  return {
    formState: state,
    handleChange,
  };
}
