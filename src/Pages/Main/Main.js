import React, { useMemo, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import PhotoCard from "../../Components/PhotoCard/PhotoCard";
import Upload from "../Upload/Upload";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Login from "../Login/Login";
import Change from "../Change/Change";

export default function Main() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(5);
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleChange, setToggleChange] = useState(false);
  const [toggleUpload, setToggleUpload] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [changedId, setChangedId] = useState(1);
  const [changedTitle, setChangedTitle] = useState("");
  const [changedUserId, setChangedUserId] = useState(1);
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [sampleUserData, setSampleUserData] = useState([]);
  const [dummyUserData, setDummyUserData] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [footerData, setFooterData] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/albums"),
      fetch("/data/data.json"),
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        setData((data) => (data = res1));
        setDummyUserData((dummyUserData) => (dummyUserData = res2.userdata));
        setFooterData((footerData) => (footerData = res2.footerdata));
      });
  }, []);

  const changeLoginStatus = () => {
    if (localStorage.getItem("token")) {
      setSampleUserData(JSON.parse(Object(localStorage.getItem("token"))));

      for (let i = 0; dummyUserData.length > i; i++) {
        for (let j = 0; sampleUserData.length > j; j++) {
          if (dummyUserData[i].email === sampleUserData[j].email) {
            setLoginStatus((loginStatus) => (loginStatus = true));
          }
        }
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    changeLoginStatus();
  }, [dummyUserData]);

  const handleChange = (e) => {
    setNewPostTitle(e.target.value);
  };

  const changeTitle = (e) => {
    setChangedTitle(e.target.value);
  };
  const changeId = (e) => {
    setChangedId(e.target.value);
  };
  const changeUserId = (e) => {
    setChangedUserId(e.target.value);
  };

  const togglingUpload = () => {
    setToggleUpload((toggleUpload) => !toggleUpload);
  };

  const togglingChange = (id, title, userId) => {
    if (toggleChange === true) {
      setToggleChange(false);
    } else if (toggleChange === false) {
      setToggleChange(true);
      setChangedId(id);
      setChangedTitle(title);
      setChangedUserId(userId);
    }
  };

  const cardModify = (getId, getTitle, getUserId) => {
    let ChangedCardData = data.map((el) =>
      el.id === Number(getId)
        ? {
            ...el,
            userId: getUserId,
            title: getTitle,
          }
        : el
    );

    setData((data) => (data = ChangedCardData));
    setToggleChange((toggleChange) => !toggleChange);
  };

  const Pagination = () => {
    setPageCount((pageCount) => pageCount + 5);
  };

  const uploadNewOne = () => {
    let RandomNum = Math.random() * (3 - 1) + 1;
    let typedData = [
      {
        userId: Math.ceil(RandomNum),
        id: data.length + 1,
        title: newPostTitle,
      },
    ];
    let pushData = typedData?.concat(data);
    console.log(pushData);
    setData(() => pushData);
    AfterType();
  };

  const DeleteOne = (id) => {
    let changeData = data.filter((el) => {
      return el.id !== id;
    });
    setData(() => changeData);
  };

  const AfterType = () => {
    setNewPostTitle(() => "");
    togglingUpload();
  };

  const togglingLogin = () => {
    if (loginStatus === true) {
      localStorage.removeItem("token");
      setLoginStatus(false);
    } else if (loginStatus === false) {
      setToggleLogin((toggleLogin) => !toggleLogin);
    }
  };

  const saveLoginId = (e) => {
    let inputValue = e.target.value;

    setLoginId(inputValue);
    if (!inputValue.includes("@") && inputValue.length > 1) {
      setEmailValidation(() => true);
    } else {
      setEmailValidation(() => false);
    }
  };

  const saveLoginPw = (e) => {
    setLoginPw(e.target.value);
  };

  const doLogin = () => {
    let triedLoginData = [{ email: loginId, pw: loginPw }];
    setDummyUserData(dummyUserData.concat(triedLoginData));
    setToggleLogin(!toggleLogin);

    console.log(dummyUserData);
    localStorage.setItem("token", JSON.stringify(dummyUserData));
    changeLoginStatus();
  };

  return (
    <div>
      <Nav
        togglingUpload={togglingUpload}
        togglingLogin={togglingLogin}
        sampleUserData={sampleUserData}
        loginStatus={loginStatus}
      />
      <main>
        <BannerImage />
        <ProductContainer>
          {data.slice(0, pageCount).map(({ id, userId, title }) => (
            <PhotoCard
              key={id}
              id={id}
              userId={userId}
              title={title}
              DeleteOne={() => DeleteOne(id)}
              togglingChange={togglingChange}
            />
          ))}
        </ProductContainer>
        <ButtonWrapper onClick={Pagination} pageCount={pageCount} data={data}>
          <Button text="See More" />
        </ButtonWrapper>
      </main>
      <Footer footerData={footerData} />
      <Upload
        toggleUpload={toggleUpload}
        togglingUpload={togglingUpload}
        handleChange={handleChange}
        newPostTitle={newPostTitle}
        setNewPostTitle={setNewPostTitle}
        uploadNewOne={uploadNewOne}
        AfterType={AfterType}
      />
      <Change
        changedId={changedId}
        changedTitle={changedTitle}
        changedUserId={changedUserId}
        toggleChange={toggleChange}
        togglingChange={togglingChange}
        changeTitle={changeTitle}
        changeId={changeId}
        cardModify={cardModify}
        changeUserId={changeUserId}
      />
      <Login
        toggleLogin={toggleLogin}
        togglingLogin={togglingLogin}
        loginId={loginId}
        loginPw={loginPw}
        saveLoginId={saveLoginId}
        saveLoginPw={saveLoginPw}
        doLogin={doLogin}
        emailValidation={emailValidation}
        dummyUserData={dummyUserData}
      />
    </div>
  );
}

const BannerImage = styled.section`
  width: 100vw;
  height: 400px;
  margin: 82px 0 30px 0;
  background-image: url("https://marketplace.travelflan.com/static/images/banner/default_top_en_US.jpg");
  background-position: 50%;

  @media only screen and (max-width: 1000px) {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: 50% 30%;
    background-size: 220vw 60vh;
  }
`;

const ButtonWrapper = styled.div`
  display: ${(props) =>
    props.pageCount >= props.data.length ? "none" : "flex"};
  justify-content: center;
  width: 100vw;
`;

const ProductContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  padding: 2em;
  background-color: #fff;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
