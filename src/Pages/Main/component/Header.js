import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <Headers>
        <MainHeader>NY Times Search</MainHeader>
        <SubHeader>기사를 검색해보세요</SubHeader>
      </Headers>
    </>
  );
};

const Headers = styled.header`
  ${({ theme }) => theme.flexSet('center', 'center')}
  flex-direction: column;
`;
const MainHeader = styled.h1`
  font-size: 3.75rem;
`;
const SubHeader = styled.h2`
  margin-top: 30px;
  font-size: 1.5rem;
`;

export default Header;
