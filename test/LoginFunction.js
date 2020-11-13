const doLogin = (
  loginId,
  loginPw,
  dummyUserData,
  toggleLogin,
  sampleUserData,
  loginStatus,
  emailValidation
) => {
  const setDummyUserData = (newdummyUserData) => {
    dummyUserData = newdummyUserData;
  };
  const setToggleLogin = (newbooleanValue) => {
    emailValidation ? (toggleLogin = newbooleanValue) : toggleLogin;
  };

  const setSampleUserData = (newSampleUserData) => {
    sampleUserData = newSampleUserData;
  };
  const setLoginStatus = (newBooleanStatus) => {
    emailValidation ? (loginStatus = newBooleanStatus) : loginStatus;
  };
  const setLoginId = (newLoginId) => {
    loginId = newLoginId;
  };
  const setEmailValidation = (newEmailValidation) => {
    emailValidation = newEmailValidation;
  };
  const saveLoginId = (loginId) => {
    setLoginId(loginId);
    if (loginId.includes("@") && loginId.length > 1) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  };

  const changeLoginStatus = () => {
    if (localStorage.getItem("token")) {
      setSampleUserData(JSON.parse(Object(localStorage.getItem("token"))));

      for (let i = 0; dummyUserData.length > i; i++) {
        for (let j = 0; sampleUserData.length > j; j++) {
          if (dummyUserData[i].email === sampleUserData[j].email) {
            setLoginStatus(true);
          }
        }
      }
    } else {
      return;
    }
  };

  let triedLoginData = [{ email: loginId, pw: loginPw }];

  setDummyUserData(
    emailValidation ? dummyUserData.concat(triedLoginData) : dummyUserData
  );
  localStorage.setItem("token", JSON.stringify(dummyUserData));
  changeLoginStatus();
  saveLoginId(loginId);

  setToggleLogin(!toggleLogin);

  return {
    localLogindataNewlength: dummyUserData.length,
    LoginToggleStatus: toggleLogin,
    isLogOutOrIn: loginStatus,
    validation: emailValidation,
  };
};

module.exports = doLogin;
