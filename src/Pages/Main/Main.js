import React from 'react';
import styled from 'styled-components';
import Header from './component/Header';
import Search from './component/Search';

const Main = () => {
  return (
    <Form>
      <Header />
      <Search />
    </Form>
  );
};

const Form = styled.section`
  margin: 0 auto;
  padding: 35px;
  width: 1000px;
`;

export default Main;
