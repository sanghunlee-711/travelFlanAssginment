const uploadNewOne = (data, newPostTitle, toggleUpload) => {
  let RandomNum = Math.random() * (3 - 1) + 1;
  let typedData = [
    {
      userId: Math.ceil(RandomNum),
      id: data.length + 1,
      title: newPostTitle,
    },
  ];
  let pushData = typedData?.concat(data);
  const setData = (newData) => {
    data = newData;
  };
  const setNewPostTitle = (inputPostTitle) => {
    newPostTitle = inputPostTitle;
  };
  const setToggleUpload = (inputToggleUpload) => {
    toggleUpload = inputToggleUpload;
  };

  const togglingUpload = () => {
    setToggleUpload(!toggleUpload);
  };

  const AfterType = () => {
    setNewPostTitle("");
    togglingUpload();
  };

  setData(pushData);
  AfterType();
  return {
    lengthOfData: data.length,
    toggleStatus: toggleUpload,
    newOneTitle: pushData[0]["title"], // make it new one in first line by concat method
  };
};

export default uploadNewOne;
