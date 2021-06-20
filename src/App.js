
import './App.css';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Navbar from './components/Navbar';
import DarkModeToggle from './components/DarkModeToggle';

const LightTheme = {
  pageBackground:"#fff",
  navBackground:"#06bcee",
  titleColor:"#1c1e21",
  textColor:"#1a1a1a"
};

const DarkTheme = {
  pageBackground:"#222",
  navBackground:"#20232a",
  titleColor:"#06bcee",
  textColor:"#fff"
};

const themes = {
  light:LightTheme,
  dark:DarkTheme
}

const Container = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    font-size: calc(2vmin);
    background: ${props => props.theme.pageBackground};
`;

function App() {
  const [theme,setTheme] = useState("light");
  return (
    <ThemeProvider theme = {themes[theme]}>
    <Router>
      <Navbar theme = {theme}/>
    <Switch>
      <Container>
        <Route path = "/DarkModeToggle">
          <DarkModeToggle theme = {theme} setTheme = {setTheme}/>
        </Route>
      </Container>
    </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
