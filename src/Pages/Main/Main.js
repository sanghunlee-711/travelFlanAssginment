import React, { useMemo, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import PhotoCard from "../../Components/PhotoCard/PhotoCard";
import Upload from "../Upload/Upload";
import Nav from "../../Components/Nav/Nav";
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

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums ") //url에 limit offset 관련 설정이 없는것으로 추측, [id,userid,title]
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const togglingUpload = () => {
    setToggleUpload(!toggleUpload);
  };
  const togglingChange = (id, title) => {
    setToggleChange(!toggleChange);
    setChangedId(id);
    setChangedTitle(title);
  };

  const cardModify = (getId, getTitle) => {
    let ChangedCardData = data.map((el) =>
      el.id === Number(getId)
        ? {
            ...el,
            id: getId,
            title: getTitle,
          }
        : el
    );
    setData(ChangedCardData);
    console.log(data);
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

  const ChangeDetail = (e) => {};

  return (
    <div>
      <Nav togglingUpload={togglingUpload} />
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
              ChangeDetail={() => ChangeDetail(id)}
              togglingChange={togglingChange}
            />
          ))}
        </ProductContainer>
        <ButtonWrapper onClick={Pagination}>
          <Button text="See More" />
        </ButtonWrapper>
      </MainContainer>
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
        ChangeDetail={ChangeDetail}
        toggleChange={toggleChange}
        togglingChange={togglingChange}
        changeTitle={changeTitle}
        changeId={changeId}
        cardModify={cardModify}
      />
      {/* <Login /> */}
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
