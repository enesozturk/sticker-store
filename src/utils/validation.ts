type InputValidatitonErrorType = "required" | "minLength" | "maxLength";

export const inputValidationError = (errorType: InputValidatitonErrorType) => {
  switch (errorType) {
    case "required":
      return "This field cannot be empty.";
    case "maxLength":
      return "This field is too long.";
    default:
      return "Error";
  }
};
