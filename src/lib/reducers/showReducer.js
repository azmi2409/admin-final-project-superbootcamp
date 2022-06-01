export const showState = {
  sidebarShow: true,
  sidebarUnfoldable: true,
};

export const showReducer = (state = showState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};
