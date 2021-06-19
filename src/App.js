
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <Router>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to = "/">Clear</Link>
            </li>
            <li>
              <Link to = "/DarkModeToggle">1. DarkModeToggle</Link>
            </li>
          </ul>
        </nav>
      </div>
    <Switch>
      <div className = "content">
        <Route path = "/DarkModeToggle">
          <DarkModeToggle/>
        </Route>
      </div>
    </Switch>
    </Router>
  );
}

export default App;
