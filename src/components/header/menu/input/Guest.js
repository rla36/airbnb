import React from "react";
import styled, { css } from "styled-components";

const Guest = ({ guest, formDispatch }) => {
  const { adult, child, infant } = guest;
  return (
    <GuestWrapper>
      {GuestItem("adult", adult, formDispatch)}
      {GuestItem("child", child, formDispatch)}
      {GuestItem("infant", infant, formDispatch)}
    </GuestWrapper>
  );
};

const GuestWrapper = styled.div``;
const GuestItem = (type, count, dispatch) => {
  return (
    <GuestItemContainer>
      {TextContainers[type]}
      <div>{ButtonSet(type, count, dispatch)}</div>
    </GuestItemContainer>
  );
};

const TextContainer = styled.div`
  & > div > p:first-child {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.6rem;
  }
  & > div > p:last-child {
    font-size: 1rem;
    color: silver;
  }
`;
const TextContainers = {
  adult: (
    <TextContainer>
      <div>
        <p>성인</p>
        <p>만 몇 세 이상</p>
      </div>
    </TextContainer>
  ),
  child: (
    <TextContainer>
      <div>
        <p>어린이</p>
        <p>만 몇 세 이상</p>
      </div>
    </TextContainer>
  ),
  infant: (
    <TextContainer>
      <div>
        <p>유아</p>
        <p>만 몇 세 이상</p>
      </div>
    </TextContainer>
  ),
};
const ButtonSet = (type, count, dispatch) => {
  return (
    <ButtonSetContainer count={count}>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "SET_GUEST",
            key: type,
            value: -1,
          });
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "SET_GUEST",
            key: type,
            value: 1,
          });
        }}
      >
        +
      </button>
    </ButtonSetContainer>
  );
};
const GuestItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  padding: 1rem;
  & + & {
    border-top: 1px solid silver;
  }
`;

const ButtonSetContainer = styled.div`
  width: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    border: 0.5px solid #b9b9b9;
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    &:hover {
      border: 1px solid black;
    }
  }

  ${({ count }) =>
    count === 0 &&
    css`
      & > button:first-child {
        opacity: 0.2;
        pointer-events: none;
      }
    `}
`;

export default Guest;
