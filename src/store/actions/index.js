//action creator func.

export const addOne = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const deleteOne = (item) => {
  return {
    type: "DELETE_ITEM",
    payload: item,
  };
};
