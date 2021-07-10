import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../Config';

const DetailPage = (props) => {
  const [detailData, setDetailData] = useState({});
  const history = useHistory();
  const productId = history.location.pathname.split('/')[2];
  // useEffect(() => {
  //   axios.get(`${API}${productId}`).then((res) => setDetailData(res.data));
  // }, []);

  return (
    <Form>
      <Contents>
        <Title>{detailData.title}</Title>
        <Body>{detailData.content}</Body>
      </Contents>
      <Back>
        <Btn onClick={() => history.push('/')}>뒤로가기</Btn>
      </Back>
    </Form>
  );
};

const Form = styled.section`
  ${({ theme }) => theme.flexSet('center', 'center')}
  flex-direction: column;
  margin: 5rem auto;
`;
const Contents = styled.body`
  ${({ theme }) => theme.flexSet('center', 'center')}
  flex-direction: column;
  padding: 35px;
  width: 930px;
  height: 247px;
  border: solid 0.5px ${(props) => props.theme.gray};
`;
const Title = styled.header`
  margin-bottom: 35px;
  height: 35px;
  text-align: center;
  line-height: 1.75rem;
  font-size: 2rem;
  font-weight: 500;
`;
const Body = styled.article`
  line-height: 1.5;
  font-weight: 400;
  font-size: 0.96rem;
`;
const Back = styled.section`
  margin: 14px 0 14px 510px;
  width: 100%;
`;
const Btn = styled.button`
  padding: 13.5px 28px;
  background-color: ${(props) => props.theme.blue};
  border-radius: 5px;
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.skyBlue};
    box-shadow: 1px 1px grey;
  }
`;

export default DetailPage;
