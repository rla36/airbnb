import styled, { css } from "styled-components";

const SearchInput = ({ inputType, children }) => {
  return (
    <SearchInputWrapper inputType={inputType}>
      <div>{children}</div>
    </SearchInputWrapper>
  );
};

const SearchInputWrapper = styled.div`
  display: flex;
  ${({ inputType }) => {
    switch (inputType) {
      case "checkIn":
        return css`
          & > div {
            width: 100%;
          }
        `;
      case "checkOut":
        return css`
          & > div {
            width: 100%;
          }
        `;
      case "price":
        return css`
          justify-content: flex-end;
        `;
      case "guest":
        return css`
          justify-content: flex-end;
        `;
    }
  }}
  & > div {
    background: white;
    border-radius: 2rem;
    padding: 1rem;
    box-sizing: border-box;
  }
  margin-top: 1.5rem;
  width: 60rem;
`;

export default SearchInput;
