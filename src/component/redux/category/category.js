const CHECK_STATUS = "CHECK_STATUS";

const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return "UNDER CONSTRUCTION";
    default:
      return state;
  }
};
