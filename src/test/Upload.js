const cardModify = (getId, getTitle, getUserId, data, toggleChange) => {
  const setData = (newData) => {
    data = newData;
  };
  const setToggleChange = (newToggleChange) => {
    toggleChange = newToggleChange;
  };

  let ChangedCardData = data.map((el) =>
    el.id === Number(getId)
      ? {
          ...el,
          userId: getUserId,
          title: getTitle,
        }
      : el
  );

  setData(ChangedCardData);
  setToggleChange(!toggleChange);

  return {
    ChangeData: ChangedCardData,
    toggleStatsu: toggleChange,
  };
};

export default cardModify;
