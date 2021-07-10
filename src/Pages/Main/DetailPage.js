import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';

const DetailPage = (props) => {
  const location = useLocation();
  const history = useHistory();
  const data = location.state.data;

  const { headline, lead_paragraph, pub_date, subsection_name } = data;
  return (
    <Form>
      <Contents>
        <Title>{headline.main}</Title>
        <Option>
          <SubName>Subsection_name: {subsection_name}</SubName>
          <Date>{new window.Date(pub_date).toLocaleDateString()}</Date>
        </Option>
        <Body>{lead_paragraph}</Body>
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
  /* height: 247px; */
  border: solid 0.5px ${(props) => props.theme.gray};
`;
const Title = styled.header`
  margin-bottom: 4px;
  height: 35px;
  text-align: center;
  line-height: 1.75rem;
  font-size: 2rem;
  font-weight: 900;
`;
const Option = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 2vw 0;
`;
const Date = styled.div`
  font-size: 0.9rem;
`;
const SubName = styled.div`
  font-weight: 600;
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
