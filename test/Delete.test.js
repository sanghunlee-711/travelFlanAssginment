import DeleteOne from "./Delete";

// base theory is that all data is rendered in page with pagination
test("Enable Delete  a card content with id", () => {
  const data = [
    { id: 1, title: "hello", userId: 2 },
    { id: 12, title: "hello", userId: 2 },
    { id: 3, title: "hello", userId: 3 },
  ];

  const id = 1;

  expect(DeleteOne(data, id)).toEqual([
    { id: 12, title: "hello", userId: 2 },
    { id: 3, title: "hello", userId: 3 },
  ]);
});
