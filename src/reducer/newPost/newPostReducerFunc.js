export const newPostReducerFunc = (state, action) => {
  switch (action.type) {
    case "CONTENT":
      return { ...state, content: action.payload };

    case "CONTENT_IMG":
      return { ...state };

    case "CLEAR":
      return { content: "", contentImage: "", profileImage: "" };

    default:
      console.log("Something is wrong");
      return { ...state };
  }
};
