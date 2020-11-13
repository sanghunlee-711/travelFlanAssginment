const DeleteOne = (data, id) => {
  const setData = (newData) => {
    data = newData;
  };
  let changeData = data.filter((el) => {
    return el.id !== id;
  });
  setData(changeData);

  return data;
};

export default DeleteOne;
