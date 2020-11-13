import uploadNewOne from "./Create";

test("Enable Add new contents check by length", () => {
  const data = [{}];
  const newPostTitle = "case1";
  const toggleUpload = true;
  expect(uploadNewOne(data, newPostTitle, toggleUpload)).toEqual({
    lengthOfData: 2,
    toggleStatus: false,
    newOneTitle: "case1",
  });
});
