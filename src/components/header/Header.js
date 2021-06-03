import Search from "./menu/Search";
import styled, { css, keyframes } from "styled-components";
import MyPage from "./MyPage";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svg/img_logo.svg";
import { ReactComponent as Submit } from "../../assets/svg/img_search.svg";
import { useHeaderDispatch, useHeaderState } from "../HeaderProvider";

const Header = () => {
  const headerState = useHeaderState();
  const { isSticky, showMiniForm, miniFormAnimationValue } = headerState;
  const headerDispatch = useHeaderDispatch();
  const onAnimationEnd = () => {
    if (isSticky && miniFormAnimationValue === "minimize") return;
    headerDispatch({ type: "AFTER_ANIMATION" });
  };

  const Minimized = styled.div`
    cursor: pointer;
    box-shadow: 0 0 5px #bdbdbd;
    width: 20rem;
    height: 3rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1rem;
    padding-right: 0.5rem;
    transition: box-shadow 0.5s;
    ${({ ani }) =>
      ani === "minimize"
        ? css`
            animation: ${minimize} 0.2s forwards;
          `
        : ani === "maximize"
        ? css`
            animation: ${minimize} 0.2s forwards reverse;
          `
        : ""}
    &:hover {
      box-shadow: 0 0 10px #a1a1a1;
    }
  `;
  return (
    <HeaderWrapper isSticky={isSticky}>
      <HeaderContainer>
        <Link
          to="/"
          onClick={() => {
            console.log("클릭댐");
            headerDispatch({ type: "CLICK_LOGO" });
          }}
        >
          <Logo fill={isSticky ? "#E84C60" : "black"} />
        </Link>
        <MenuContainer isSticky={isSticky} showMin={showMiniForm}>
          {showMiniForm && (
            <Minimized
              ani={miniFormAnimationValue}
              onAnimationEnd={onAnimationEnd}
              onClick={() => {
                headerDispatch({ type: "CLICK_MINIFORM" });
              }}
            >
              <p>검색 시작하기</p>
              <SubmitDIV>
                <Submit fill="#E84C60" width="15" height="15" />
              </SubmitDIV>
            </Minimized>
          )}
          <Search />
        </MenuContainer>
        <MyPage />
      </HeaderContainer>
    </HeaderWrapper>
  );
};
const minimize = () => keyframes`
  from {
    margin-top: 5rem;
    width: 80%;
    height: 4rem;
    border-radius: 2rem;
  }
  to {
    margin-top: 0;
    width: 30%;
    height: 3rem;
    border-radius: 1.5rem;
  }
`;

const HeaderWrapper = styled.div`
  position: ${({ isSticky }) => (isSticky ? "fixed" : "absolute")};
  top: 0;
  width: 100%;
  transition: all 0.3s;
  ${({ isSticky }) =>
    isSticky &&
    css`
      background: white;
    `}
`;
const HeaderContainer = styled.div`
  width: 80%;
  height: 80px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    width: 33%;
  }
`;
const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 1rem;
  align-items: ${({ showMin }) => (showMin ? "center" : "normal")};

  ${({ isSticky }) =>
    isSticky &&
    css`
      width: 80%;
    `};
`;
const SubmitDIV = styled.div`
  background: #e84c60;
  border-radius: 1rem;
  padding: 0.5rem;
`;

export default Header;
