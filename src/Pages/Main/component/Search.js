import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Post from './Post';
import { API } from '../../../Config';

const Search = () => {
  const [userInput, setUserInput] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const [filterData, setFilterData] = useState(false);
  const [btnEvent, setBtnEvent] = useState(true);
  const [searchData, setSearchData] = useState([]);

  //초기값
  useEffect(() => {
    runAxious();
  }, []);
  const runAxious = async (search = { searchData }) => {
    try {
      console.log(search);
      const config = {
        headers: { Accept: 'application/json' },
      };
      const res = await axios.get(
        `${API}${search}&api-key=wTwRh7Blb0nUPWPWvHQCWVupJSoQBqeu`,
        config
      );
      setDataList(res.data.response.docs);
      console.log(dataList);
    } catch (e) {
      console.log(e);
    }
  };

  // const clickhandler = (searchData) => {
  //   useEffect((searchData) => {
  //     runAxious(searchData);
  //   }, []);
  // };

  const searchfilter = (e) => {
    setUserInput(e.target.value);
  };

  // useEffect(() => {
  //   const FINDVALUE = () => {
  //     setFilterData(
  //       Object.values(dataList).filter((dataList) => {
  //         return dataList.headline.main.toLowerCase().includes(userInput);
  //       })
  //     );
  //   };
  //   setTimeout(FINDVALUE, 150);
  // }, [searchData]);

  useEffect(() => {
    const FINDVALUE = () => {
      setFilterData(
        Object.values(dataList).filter((dataList) => {
          return dataList.headline.main.toLowerCase().includes(userInput);
        })
      );
    };
    setTimeout(FINDVALUE, 150);
  }, [userInput]);

  const inputFocus = () => {
    document.getElementById('inputBox').focus();
  };

  return (
    <>
      <SearchForm>
        <SearchBox
          onClick={() => {
            document.getElementById('searchBox').focus();
          }}
        >
          <InputBox
            id="searchBox"
            placeholder="검색어를 입력하세요"
            onChange={(e) => {
              setTimeout(setSearchData(e.target.value), 150);
            }}
          ></InputBox>
          <GoSearch
            searchData={searchData}
            onClick={() => {
              runAxious(searchData);
            }}
          >
            검색
          </GoSearch>
        </SearchBox>
        <FilterBox
          focus={isFocus}
          onClick={() => {
            inputFocus();
          }}
        >
          <Icon>
            <i className="fas fa-search"></i>
          </Icon>
          <InputBox
            id="inputBox"
            placeholder="찾은 검색을 필터링하세요"
            onBlur={() => {
              setIsFocus(false);
            }}
            onFocus={() => {
              setIsFocus(true);
            }}
            onChange={(e) => {
              searchfilter(e);
            }}
          ></InputBox>
        </FilterBox>
      </SearchForm>

      <Post
        data={filterData[0] ? filterData : dataList}
        userInput={userInput}
        setBtnEvent={setBtnEvent}
        btnEvent={btnEvent}
      />
    </>
  );
};

const SearchForm = styled.section`
  ${({ theme }) => theme.flexSet('space-around', 'center')}
  margin: 10vh 0;
`;
const SearchBox = styled.figure`
  display: flex;
  padding: 14px;
  width: 336px;
  height: 51px;
  border: ${(props) =>
    props.focus ? `0.5px solid #3b82f6` : `0.5px solid rgba(229, 231, 235)`};
  border-radius: 5px;
  cursor: text;
  &:hover {
    border: 0.5px solid #3b82f6;
  }
`;
const GoSearch = styled.span`
  width: 4vw;
  border: 0.5px solid orange;
  background-color: goldenrod;
  border-radius: 5px;
  padding: 0.2vw 0.3vw;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: blue;
    color: blue;
  }
`;

const FilterBox = styled.figure`
  display: flex;
  padding: 14px;
  width: 336px;
  height: 51px;
  border: ${(props) =>
    props.focus ? `0.5px solid #3b82f6` : `0.5px solid rgba(229, 231, 235)`};
  border-radius: 5px;
  cursor: text;
  &:hover {
    border: 0.5px solid #3b82f6;
  }
`;
const Icon = styled.span`
  margin: 0 4px;
  padding-top: 2px;
  color: grey;
  font-size: 14px;
`;
const InputBox = styled.input`
  width: 285px;
  height: 21px;
  font-size: 100%;
  cursor: text;
  &:focus {
    outline: none;
  }
`;

export default Search;
