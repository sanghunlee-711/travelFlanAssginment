import cardModify from "./Upload";

test("Enable change rendered card", () => {
  const data = [
    { id: 1, title: "hello", userId: 2 },
    { id: 12, title: "hello", userId: 2 },
    { id: 3, title: "hello", userId: 3 },
  ];
  const getId = 1; // id'd not change, it's for define which card is
  const getTitle = "NewOne";
  const getUserId = 77;
  const toggleChange = true;

  expect(cardModify(getId, getTitle, getUserId, data, toggleChange)).toEqual({
    ChangeData: [
      { id: 1, title: "NewOne", userId: 77 },
      { id: 12, title: "hello", userId: 2 },
      { id: 3, title: "hello", userId: 3 },
    ],
    toggleStatsu: false,
  });
});
