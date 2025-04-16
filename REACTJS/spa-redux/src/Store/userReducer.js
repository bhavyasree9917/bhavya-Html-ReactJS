const initialData = ["bhavyasree", "rameshbabu", "lakshmi", "yamuna"];

export const usersReducer = (state = initialData, action) => {
  switch (action.type) {
    case "CREATE":
      break;
    case "READ":
      break;
    case "UPDATE":
      break;
    case "DELETE":
      break;

    default:
      return state;
  }
};

