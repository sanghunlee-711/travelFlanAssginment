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
        setData(res1);
        setDummyUserData(res2.userdata);
        setFooterData(res2.footerdata);
      });
  }, []);

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

  useEffect(() => {
    changeLoginStatus();
  }, [dummyUserData]);

  const doLogin = () => {
    let triedLoginData = [{ email: loginId, pw: loginPw }];
    setDummyUserData(dummyUserData.concat(triedLoginData));
    setToggleLogin(!toggleLogin);

    console.log(dummyUserData);
    localStorage.setItem("token", JSON.stringify(dummyUserData));
    changeLoginStatus();
  };

  const handleChange = (e) => {
    setNewPostTitle(e.target.value);
    console.log(newPostTitle);
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
    setToggleUpload(!toggleUpload);
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
    setData(ChangedCardData);
    setToggleChange(!toggleChange);
  };

  const Pagination = () => {
    setPageCount(pageCount + 5);
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
    setData(pushData);
    AfterType();
  };

  const DeleteOne = (id) => {
    let changeData = data.filter((el) => {
      return el.id !== id;
    });
    setData(changeData);
  };

  const AfterType = () => {
    setNewPostTitle("");
    togglingUpload();
  };

  const togglingLogin = () => {
    if (loginStatus === true) {
      localStorage.removeItem("token");
      setLoginStatus(false);
    } else if (loginStatus === false) {
      setToggleLogin(!toggleLogin);
    }
  };

  const saveLoginId = (e) => {
    let inputValue = e.target.value;
    console.log(inputValue);
    setLoginId(inputValue);
    if (!inputValue.includes("@") && inputValue.length >= 1) {
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
    console.log(loginId, loginPw);
  };
  const saveLoginPw = (e) => {
    setLoginPw(e.target.value);
  };

  return (
    <div>
      <Nav
        togglingUpload={togglingUpload}
        togglingLogin={togglingLogin}
        sampleUserData={sampleUserData}
        loginStatus={loginStatus}
      />
      <MainContainer>
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
        <ButtonWrapper onClick={Pagination}>
          <Button text="See More" />
        </ButtonWrapper>
      </MainContainer>
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
      />
    </div>
  );
}

const MainContainer = styled.main`
  color: blue;
`;

const BannerImage = styled.section`
  background-image: url("https://marketplace.travelflan.com/static/images/banner/default_top_en_US.jpg");
  width: 100vw;
  height: 400px;
  background-position: 50%;
  margin: 30px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const ProductContainer = styled.section`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  padding: 2em;
  justify-content: center;
  background-color: #fff;
`;

// Delete는 PhotoCard id로 filter 메서드 이용해서 -> done
// Create 는 length + 1 로 id 만들어서 새로 만들기 -> hmm ... done -> id 해결 -> 비동기 문제 어쩌지-> redux버리고 하나로 다 모았다.
// Update 는 해당 아이디 값 찾아서 그냥 state에 있는 data 수정해버리자
// Read는 그냥 컴포넌트 띄워주니까 그걸로 퉁 ? -> toong
