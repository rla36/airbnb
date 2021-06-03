import { useReducer } from "react";
import styled, { css } from "styled-components";
import SearchForm from "./SearchForm";
import SearchInput from "./SearchInput";
import Calendar, { Controller } from "../../../lib/calendar/Calendar";
import Chart from "./input/Chart";
import Guest from "./input/Guest";
import { useHeaderDispatch, useHeaderState } from "../../HeaderProvider";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_TYPE":
      return { ...state, inputType: action.inputType };
    case "SET_CHECK_IN":
      return { ...state, checkIn: action.checkIn };
    case "SET_CHECK_OUT":
      return { ...state, checkOut: action.checkOut };
    case "SET_PRICE":
      return { ...state, minPrice: action.minPrice, maxPrice: action.maxPrice };
    case "SET_GUEST":
      return { ...state, guest: action.guest };
  }
};

const initialDate = {
  year: null,
  month: null,
  day: null,
};

const initialFormState = {
  inputType: "none",
  checkIn: initialDate,
  checkOut: initialDate,
  minPrice: 100000,
  maxPrice: 150000,
  guest: {
    adult: 1,
    child: 0,
    infant: 0,
  },
};

const Search = () => {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);
  const { inputType, checkIn, checkOut } = formState;

  const headerState = useHeaderState();
  const { showForm } = headerState;
  const headerDispatch = useHeaderDispatch();

  const onClickDay = (result) => {
    const { nextClickTarget, startDate, endDate } = result;
    formDispatch({
      type: "SET_CHECK_IN",
      checkIn: startDate ? startDate : initialDate,
    });
    formDispatch({
      type: "SET_CHECK_OUT",
      checkOut: endDate ? endDate : initialDate,
    });
    if (nextClickTarget === "start") {
      formDispatch({ type: "SET_TYPE", inputType: "checkIn" });
    } else if (nextClickTarget === "end") {
      formDispatch({ type: "SET_TYPE", inputType: "checkOut" });
    }
  };

  return (
    <MenuWrapper showForm={showForm}>
      <form>
        <MenuSelector>
          <Selector>
            <label for="STAYS">
              <input type="radio" id="STAYS" name="searchType" />
              <span>숙소</span>
            </label>
          </Selector>
          <Selector>
            <label for="EXPERIENCES">
              <input type="radio" id="EXPERIENCES" name="searchType" />
              <span>체험</span>
            </label>
          </Selector>
          <Selector>
            <a href="">
              <span>온라인 체험</span>
            </a>
          </Selector>
        </MenuSelector>
        <SearchForm
          {...{
            Controller,
            formState,
            formDispatch,
          }}
        />
        <SearchInput type="calendar">
          {(inputType === "checkIn" || inputType === "checkOut") && (
            <Calendar onClickDay={onClickDay} start={checkIn} end={checkOut} />
          )}
          {inputType === "price" && <Chart />}
          {inputType === "guest" && <Guest />}
        </SearchInput>
      </form>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  ${({ showForm }) =>
    !showForm &&
    css`
      display: none;
    `}
  & > form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const MenuSelector = styled.fieldset`
  display: flex;
  margin-bottom: 2rem;
`;
const Selector = styled.div`
  & + & {
    margin-left: 1rem;
  }
  & > label {
    cursor: pointer;
  }
  & > label > input[type="radio"] {
    position: absolute;
    width: 0;
  }
`;
export default Search;
