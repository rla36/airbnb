import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import SearchPage from "./components/search/SearchPage";
import GlobalStyle from "./utils/GlobalStyles";
import HeaderProvider from "./components/HeaderProvider";
import Container from "./components/Container";

export default function App() {
  return (
    <>
      <GlobalStyle />

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
