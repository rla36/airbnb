import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import SearchPage from "./components/search/SearchPage";
import GlobalStyle from "./utils/GlobalStyles";
import styled from "styled-components";
import HeaderProvider from "./components/HeaderProvider";
import Container from "./components/Container";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Corona>
        에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
      </Corona>
      <HeaderProvider>
        <Container />
      </HeaderProvider>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </>
  );
}
const Corona = styled.div`
  background: #292833;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
