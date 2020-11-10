import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Button from "../../Components/Button/Button";
import PhotoCard from "../../Components/PhotoCard/PhotoCard";
import { useSelector, useDispatch } from "react-redux";

export default function Main() {
  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(5);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums ") //url에 limit offset 관련 설정이 없는것으로 추측, [id,userid,title]
      .then((res) => res.json())
      .then((res) => setData(res.slice(0, pageCount)));
  }, [pageCount]);
  const item = useSelector((store) => store.uploadReducer); // 가져오기

  const Pagination = () => {
    setPageCount(pageCount + 5);
  };

  const uploadNewOne = () => {
    data.unshift({ id: data.length + 1, userid: Math.random(), title: item });
  };

  useEffect(() => {
    uploadNewOne();
  }, [item]);

  const DeleteOne = (id) => {
    let changeData = data.filter((el) => {
      return el.id !== id;
    });
    setData(changeData);
  };

  // Delete는 PhotoCard id로 filter 메서드 이용해서 -> done
  // Create 는 length + 1 로 id 만들어서 새로 만들기 -> hmm ... done
  // Update 는 해당 아이디 값 찾아서 그냥 state에 있는 data 수정해버리자
  // Read는 그냥 컴포넌트 띄워주니까 그걸로 퉁 ? -> toong
  return (
    <MainContainer>
      <BannerImage />
      <ProductContainer>
        {data.map(({ id, userid, title }) => (
          <PhotoCard
            key={id}
            id={id}
            userid={userid}
            title={title}
            DeleteOne={() => DeleteOne(id)}
          />
        ))}
      </ProductContainer>
      <ButtonWrapper onClick={Pagination}>
        <Button text="See More" />
      </ButtonWrapper>
    </MainContainer>
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
