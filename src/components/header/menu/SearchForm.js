import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FORM_ITEM } from "../../../utils/constant";
import { requestRooms } from "../../../utils/fetchFn";
import { ReactComponent as Submit } from "../../../assets/svg/img_search.svg";
import { useHistory } from "react-router-dom";
import { useHeaderDispatch } from "../../HeaderProvider";

const SearchForm = ({ Controller, formState, formDispatch }) => {
  const history = useHistory();
  const [isSearch, setIsSearch] = useState(false);
  const { inputType, checkIn, checkOut, minPrice, maxPrice, guest } = formState;
  const headerDispatch = useHeaderDispatch();

  return (
    <SearchFormWrapper>
      {renderButton(isSearch, formState, history, headerDispatch)}
      <SearchFormContainer isSearch={isSearch}>
        <Controller start>
          {renderFormItem({
            type: "checkIn",
            isSearch,
            setIsSearch,
            inputType,
            formDispatch,
            value: checkIn,
          })}
        </Controller>
        <Controller end>
          {renderFormItem({
            type: "checkOut",
            isSearch,
            setIsSearch,
            inputType,
            formDispatch,
            value: checkOut,
          })}
        </Controller>
        {renderFormItem({
          type: "price",
          isSearch,
          setIsSearch,
          inputType,
          formDispatch,
          value: { minPrice, maxPrice },
        })}
        {renderFormItem({
          type: "guest",
          isSearch,
          setIsSearch,
          inputType,
          formDispatch,
          value: guest,
        })}
      </SearchFormContainer>
    </SearchFormWrapper>
  );
};

const renderFormItem = ({
  type,
  isSearch,
  setIsSearch,
  inputType,
  formDispatch,
  value,
}) => {
  const { title, placeholder, size } = FORM_ITEM[type];
  const isSelected = inputType === type;

  return (
    <FormItem
      flex={size}
      isSearch={isSearch}
      isSelected={isSelected}
      onClick={() => {
        setIsSearch("true");
        formDispatch({ type: "SET_TYPE", inputType: type });
      }}
    >
      <label for={type}>
        <div>{title}</div>
        <input
          type="text"
          placeholder={placeholder}
          id={type}
          value={getValue(type, value)}
        />
      </label>
    </FormItem>
  );
};

const getValue = (type, value) => {
  if (type === "checkIn" || type === "checkOut") {
    if (!value.year) return "";
    const { month, day } = value;
    return `${month}월 ${day}일`;
  } else if (type === "price") {
    const { minPrice, maxPrice } = value;
    return `${minPrice} ~ ${maxPrice}`;
  } else if (type === "guest") {
    const { adult, child, infant } = value;
    const total = adult + child + infant;
    return total === 0 ? "" : `게스트 ${total}명`;
  }
};
const renderButton = (isSearch, formState, history, headerDispatch) => {
  const onClickSearch = async (e) => {
    e.preventDefault();
    const { checkIn, checkOut, minPrice, maxPrice, guest } = formState;
    const result = await requestRooms({
      location: {
        lat: "",
        lng: "",
      },
      check: {
        checkIn: toStringDate(checkIn),
        checkOut: toStringDate(checkOut),
      },
      price: { minPrice, maxPrice },
      guest,
    });
    if (!result) return;
    headerDispatch({ type: "CLICK_SEARCH" });
    history.push({
      pathname: "/search",
      state: { result, formState },
    });
  };
  return (
    <SubmitButton onClick={onClickSearch}>
      <Submit width="25" height="25" />
      {isSearch && <div>검색</div>}
    </SubmitButton>
  );
};
const toStringDate = (date) => {
  const { year, month, day } = date;
  return `${year}-${month > 9 ? month : "0" + month}-${
    day > 9 ? day : "0" + day
  }`;
};

const SearchFormWrapper = styled.div`
  width: 60rem;
  border-radius: 3rem;
  box-shadow: 3px 0 15px #929292;
  position: relative;
`;
const SubmitButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: #e84c60;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;

  & > div {
    color: white;
    margin-left: 0.5rem;
    font-weight: bold;
  }
`;

const SearchFormContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ isSearch }) => (isSearch ? "#f6f6f6" : "white")};
  border-radius: 2rem;
  height: 4rem;
`;
const FormItem = styled.div`
  box-sizing: border-box;
  background: none;
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 2rem;
  &:hover {
    background: #e9e9e9;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      background: white;
      box-shadow: 0 0 15px #b3b3b3;
    `}

  flex: ${({ flex }) => flex};
  & > label {
    padding: 0 2rem;
  }
  & > label > div {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & > label > input[type="radio"] {
    position: absolute;
    width: 0;
    font-size: 0.8rem;
  }
  & + &::before {
    content: "";
    height: 60%;
    width: 1px;
    border-left: 1px solid #e0e0e0;
  }
`;
export default SearchForm;
