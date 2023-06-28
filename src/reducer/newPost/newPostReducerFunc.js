export const newPostReducerFunc = (state, action) => {
  switch (action.type) {
    case "CONTENT":
      return { ...state, content: action.payload };

    case "ADD_EMOJI":
      const updatedContent = state.content + action.payload;
      return { ...state, content: updatedContent };

    case "CONTENT_IMG":
      console.log(action.payload);
      return { ...state, contentImage: action.payload };

    case "EDIT_POST":
      console.log("edit");
      return {
        content: action.payload.content,
        contentImage: action.payload?.contentImage,
        profileImage: action.payload?.profileImage,
      };

    case "CLEAR":
      return { content: "", contentImage: "", profileImage: "" };

    default:
      console.log("Something is wrong");
      return { ...state };
  }
};
