import LoginFunction from "./LoginFunction";

test("Enable to login when validation is correct case1", () => {
  const loginId = "abcedf@abcedf.com";
  const loginPw = "12345sldkf";
  const dummyUserData = [{}, {}, {}];
  const emailValidation = true;
  const loginStatus = false;
  const toggleLogin = true; //true mean login modal window is opend

  const sampleUserData = [
    { id: 1, title: "hello", userId: 2 },
    { id: 12, title: "hello", userId: 2 },
  ]; // data for chcking status when re-loading

  expect(
    LoginFunction(
      loginId,
      loginPw,
      dummyUserData,
      toggleLogin,
      sampleUserData,
      loginStatus,
      emailValidation
    )
  ).toEqual({
    localLogindataNewlength: 4,
    LoginToggleStatus: false, //false mean login modal window is opend
    isLogOutOrIn: true,
    validation: true,
  });
});

test("Enable to login when validation is correct case2", () => {
  const loginId = "abcedf";
  const loginPw = "12345sldkf";
  const dummyUserData = [{}, {}, {}];
  const toggleLogin = true; // true mean login modal window is opend
  const sampleUserData = [
    { id: 1, title: "hello", userId: 2 },
    { id: 12, title: "hello", userId: 2 },
  ]; // data for chcking status when re-loading
  const loginStatus = false;
  const emailValidation = false;
  expect(
    LoginFunction(
      loginId,
      loginPw,
      dummyUserData,
      toggleLogin,
      sampleUserData,
      loginStatus,
      emailValidation
    )
  ).toEqual({
    localLogindataNewlength: 3,
    LoginToggleStatus: true,
    isLogOutOrIn: false,
    validation: false,
  });
});
