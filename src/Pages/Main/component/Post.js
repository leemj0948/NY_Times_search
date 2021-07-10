import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Post = (props) => {
  const { data, userInput } = props;
  const history = useHistory();
  const goToProductDetail = (id, userInput) => {
    if (userInput === '') {
      history.push(`/detailpage/${id}`);
    } else {
      history.push(`/detailpage/${id}?search=${userInput}`);
    }
  };
  return (
    <PostForm>
      <Line />
      <Body>
        {Boolean(data[0]) &&
          data.map((elm, index) => {
            const { headline, lead_paragraph, section_name, multimedia } = elm;
            return (
              <List
                key={index}
                id={index}
                userInput={userInput}
                onClick={() => goToProductDetail(elm.id, userInput)}
              >
                {/* <Img src={multimedia[0].url}></Img> */}
                <Title>
                  <Number>{section_name}) </Number>
                  {headline.main}
                </Title>
                <Contents>{lead_paragraph.substring(0, 30)}...more</Contents>
              </List>
            );
          })}
      </Body>
    </PostForm>
  );
};

const PostForm = styled.section``;
const Line = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.gray};
`;
const Body = styled.ul`
  margin-top: 0.5vw;
  padding: 1.5vw;
  width: 100%;
  background-color: white;
  border: 0 solid;
  border-radius: 0.5vw;
  border-color: ${(props) => props.theme.gray};
  box-shadow: inset 0 0px 8px 1px rgba(0, 0, 0, 0.06);
`;
const List = styled.li`
  padding: 1vw;
  cursor: pointer;
  &:hover {
    background-color: rgba(243, 244, 246);
  }
`;
const Img = styled.img``;
const Title = styled.h1`
  font-weight: 700;
  line-height: 1.75rem;
`;
const Number = styled.span`
  color: ${(props) => props.theme.blue};
`;
const Contents = styled.p`
  display: -webkit-box;
  word-wrap: break-word;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.2rem;
  height: 3.6rem;
  text-overflow: ellipsis;
`;
export default Post;
