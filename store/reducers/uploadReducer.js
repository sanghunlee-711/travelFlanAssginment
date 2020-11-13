//reducer는 액션생성함수가 리턴한 액션객체를 dispatch했을때 들어올 곳이다.
//보통 switch case문으로 작성

const uploadReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [action.payload];

    default:
      return state;
  }
};

export default uploadReducer;
